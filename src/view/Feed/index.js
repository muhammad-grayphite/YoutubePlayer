import * as React from "react";
import { View, Text, Dimensions, } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

import VideoCard from "../../components/VideoCard";
import Comments from '../../components/comments';
import { videos } from "../../constants/values";
import { ScrollView } from "react-native-web";
import DetailCard from "../../components/DetailCard";
import ChannelCard from "../../components/ChannelCard";
import CommentsBox from "../../components/CommentsBox";
import { isCloseToBottom } from "../../assets/RandomFun";
import { fetchVideoById, fetchVideos, getVideoComments } from "../../utility";
import SearchBar from "../../components/Search";
import styles from "./styles";


function Feed({ navigation, route }) {

    const video = React.useRef(null);
    const refVideo2 = React.useRef(null);
    const scrollRef = React.useRef();
    let videoId = route?.params?.id?.videoId;
    const [inFullscreen, setInFullsreen] = React.useState(false);

    React.useEffect(() => {
        fetchVideosList();
        fetchVideoComments();
    }, []);

    React.useEffect(() => {
        fetchVideoDetail();
    }, [])

    const [state, updateState] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            isReplyBoxVisible: false,
            video_Id: videoId,
            isMenuVisible: false,
            showmore: false,
            video_detail: {},
            video_comments: {},
            list: [],
            commentsList: [],
            nextPageToken: null,
            comments_next_page_token: null,
            search: '', selectedIndex: null,
        }
    );
    const {
        isReplyBoxVisible, video_Id,
        isMenuVisible, showmore,
        video_detail, list,
        nextPageToken, commentsList,
        search, video_comments,
        comments_next_page_token,
        selectedIndex,
    } = state;

    const fetchVideoDetail = async (id) => {
        let _id = ''
        if (id) {
            _id = id
        } else {
            _id = video_Id
        };

        await fetchVideoById(_id).then((res) => {
            try {
                updateState({ video_detail: res?.items[0] });
            } catch (error) { console.log('error', error) };
        }).catch((error) => { console.log('error', error) });
    };

    const fetchVideosList = async () => {
        let obj = { nextPageToken: nextPageToken }
        await fetchVideos(obj).then((res) => {
            try {
                if (res?.items) {
                    let allVideos = list.concat(res.items);
                    updateState({
                        list: allVideos,
                        nextPageToken: res?.nextPageToken
                    });
                };
            } catch (error) { alert(error?.error?.message) };
        }).catch((error) => { alert('somthing went wrong') });
    };

    const fetchVideoComments = async (id) => {
        let _id = '';
        if (id) {
            _id = id
        } else {
            _id = video_Id
        };
        let obj = { nextPageToken: comments_next_page_token, vid: _id };
        await getVideoComments(obj).then((res) => {
            try {
                if (res?.items) {
                    let allComments = commentsList.concat(res.items);
                    updateState({
                        commentsList: allComments,
                        comments_next_page_token: res?.nextPageToken
                    });
                };
            } catch (error) { console.log('error', error) };
        }).catch((error) => { console.log('error', error) });
    };

    const handleVideoPress = (video) => {
        scrollRef.current?.scrollTo({ y: 0, animated: true, });
        updateState({ video_Id: video?.id?.videoId });
        fetchVideoDetail(video?.id?.videoId);
        fetchVideoComments(video?.id?.videoId);
    };

    const hideReplyBox = () => { updateState({ selectedIndex: null }) };
    const showReplyBox = (index) => { updateState({ selectedIndex: index }) };
    const hideMenu = () => { updateState({ isMenuVisible: false }) };
    const showMenu = () => updateState({ isMenuVisible: true });
    const showMore = () => updateState({ showmore: !showmore });
    const handleDrawer = () => { navigation.openDrawer(); };
    const handleSearchValue = (value) => { updateState({ search: value }) };

    const Detailcard = React.useMemo(() => (
        <DetailCard
            key={Math.random()}
            isMenuVisible={isMenuVisible}
            hideMenu={hideMenu}
            showMenu={showMenu}
            item={video_detail}
        />
    ), [video_detail, isMenuVisible]);

    const Channelcard = React.useMemo(() => (
        <ChannelCard
            key={Math.random()}
            handleshowMore={showMore}
            showmore={showmore}
            item={video_detail}
        />
    ), [video_detail, showmore]);

    const comments = React.useMemo(() => (
        commentsList?.map((comment, index) => {
            return (
                <Comments
                    key={Math.random()}
                    item={comment}
                    index={index}
                    showReplyBox={() => showReplyBox(index)}
                    hideReplyBox={() => hideReplyBox()}
                    selected_Index={selectedIndex}
                />
            )
        })
    ), [commentsList, selectedIndex]);

    const videocard = React.useMemo(() => (
        list?.map((item, index) => {
            return (
                <VideoCard
                    handlePress={() => handleVideoPress(item)}
                    key={`key${index}`}
                    item={item}
                    index={index}
                />
            );
        })
    ), [list]);

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                onChangeText={handleSearchValue}
                searchText={search}
                handleSearchPress={() => { }}
                handleDrawer={handleDrawer}
            />
            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        fetchVideoComments();
                        fetchVideosList();
                    }
                }}
                scrollEventThrottle={400}
                ref={scrollRef}
            >
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.playerView}>
                            <iframe
                                width="100%" height="615"
                                src={`https://www.youtube.com/embed/${video_Id}?modestbranding=1&rel=1&autoplay=1`}
                                allowFullScreen='allowfullscreen'
                            >
                            </iframe>

                            {!inFullscreen ?
                                <>
                                    {Detailcard}
                                    <View style={styles.divider}></View>
                                    <View style={styles.channelNameView}>{Channelcard}</View>
                                    <View style={styles.divider}></View>
                                    <View style={[styles.row2, styles.channelNameView]}>
                                        <Text style={styles.boldText}>11 Comments</Text>
                                        <Text style={{ marginLeft: 30 }}>Sort</Text>
                                    </View>
                                    <CommentsBox />
                                    {comments}
                                </> : null
                            }
                        </View>

                        {!inFullscreen ?
                            <>
                                <View style={styles.list}>{videocard}</View>
                            </> : null}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Feed;
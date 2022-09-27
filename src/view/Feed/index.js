import * as React from "react";
import {
    View, Text,
    Dimensions,
} from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import VideoPlayer from 'expo-video-player'
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";

import VideoCard from "../../components/VideoCard";
import Comments from '../../components/comments';
import { videos } from "../../constants/values";
import styles from "./styles";
import { ScrollView } from "react-native-web";
import DetailCard from "../../components/DetailCard";
import ChannelCard from "../../components/ChannelCard";
import CommentsBox from "../../components/CommentsBox";
import {WebView} from "react-native-webview";
import { fetchVideoById, fetchVideos } from "../../utility";

// import YoutubePlayer from 'react-native-youtube-iframe';

function Feed({ navigation, route }) {
    const video = React.useRef(null);
    const refVideo2 = React.useRef(null)
    const scrollRef = React.useRef();
    let videoId = route?.params?.id?.videoId

    const [inFullscreen, setInFullsreen] = React.useState(false)

    React.useEffect(() => {
        fetchVideosList()
    }, []);

    React.useEffect(()=>{
        fetchVideoDetail()
    },[])

    const [state, updateState] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            isReplyBoxVisible: false,
            video_Id:videoId,
            // video_Id: route?.params?.sources[0] ? route?.params?.sources[0] : '',
            isMenuVisible: false,
            showmore: false , 
            video_detail:{},
            list: [],
            nextPageToken: null,

        }
    )
    const { isReplyBoxVisible, video_Id, isMenuVisible, showmore , video_detail , list , nextPageToken } = state



    const fetchVideoDetail =async(id)=>{
        console.log('video id', video_Id)
        let _id = ''
        if(id){
            _id=id
        }else{
            _id=video_Id
        }

       await fetchVideoById(_id).then((res)=>{
           try{
            console.log('inside',res)
             updateState({video_detail:res?.items[0]})
           }catch(error){
            console.log('error',error)
           }
       }).catch((error)=>{
         console.log('error', error)
       })
    }

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
    
            }
          } catch (error) {alert(error?.error?.message);}
        }).catch((error) => { alert('somthing went wrong');})
      }



    const hideReplyBox = () => {
        updateState({ isReplyBoxVisible: false })

    }
    const showReplyBox = () => {
        updateState({ isReplyBoxVisible: true })
    }

    const handleVideoPress = (video) => {
        // console.log('vide is' , video)
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
        updateState({ video_Id: video?.id?.videoId })
        fetchVideoDetail(video?.id?.videoId)
        
    }

    const hideMenu = () => {
        updateState({ isMenuVisible: false })
    };

    const showMenu = () => updateState({ isMenuVisible: true });
    const showMore = () => updateState({ showmore: !showmore })
 
    return (
        <ScrollView ref={scrollRef}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.playerView}>

                   <iframe
                    width="100%" height="615" 
                    src={`https://www.youtube.com/embed/${video_Id}?modestbranding=1&rel=1&autoplay=1`}
                    // src="https://www.youtube.com/embed/W9hXsU_vh5k?modestbranding=1&rel=1"
                    // title="YouTube video player" frameborder="0" 
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen='allowfullscreen'
                    >
                    </iframe>

                   

                        {/* <VideoPlayer
                            style={{ height: inFullscreen ? Dimensions.get('window').height : 500, width: inFullscreen ? Dimensions.get('window').width : '100%', }}
                            videoProps={
                                {
                                    shouldPlay: true,
                                    autoHidePlayer:true,
                                    // resizeMode: 'contain',
                                    ref: refVideo2,
                                    style: {
                                        videoBackgroundColor: 'black',
                                        height: inFullscreen ? Dimensions.get('window').height : 500,
                                        width: inFullscreen ? Dimensions.get('window').width : '100%',
                                    },
                                    source: { uri: video_Id ? video_Id : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },

                                }}
                            defaultControlsVisible={true}
                            autoHidePlayer={false}
                            fullscreen={{
                                inFullscreen: inFullscreen,
                                enterFullscreen: async () => {
                                    setInFullsreen(!inFullscreen)
                                    refVideo2.current.setStatusAsync({
                                        shouldPlay: true,
                                    })

                                },
                                exitFullscreen: async () => {
                                    setInFullsreen(false)
                                },

                            }}
                        /> */}


                        {!inFullscreen ?
                            <>
                                <DetailCard
                                    isMenuVisible={isMenuVisible}
                                    hideMenu={hideMenu}
                                    showMenu={showMenu}
                                    item={video_detail}
                                />
                                <View style={styles.divider}></View>


                                <View style={styles.channelNameView}>
                                    <ChannelCard
                                        handleshowMore={showMore}
                                        showmore={showmore}
                                        item={video_detail}

                                    />
                                </View>
                                <View style={styles.divider}></View>

                                <View style={[styles.row2, styles.channelNameView]}>
                                    <Text style={styles.boldText}>11 Comments</Text>
                                    <Text style={{ marginLeft: 30 }}>Sort</Text>
                                </View>

                                <CommentsBox />
                                <Comments
                                    showReplyBox={showReplyBox}
                                    hideReplyBox={hideReplyBox}
                                    isVisible={isReplyBoxVisible}
                                />
                                <Comments />
                            </> : null
                        }

                    </View>

                    {!inFullscreen ?
                        <>
                            <View style={styles.list}>
                                {list?.map((item, index) => {
                                    return (
                                        <VideoCard
                                            handlePress={() => handleVideoPress(item)}
                                            key={`key${index}`}
                                            item={item}
                                            index={index}
                                        />
                                    );
                                })}
                            </View>
                        </> : null}

                </View>

                {inFullscreen ?
                    <View>
                        <View style={styles.row}>
                            <View style={styles.playerView}>
                                <>
                                    <DetailCard
                                        isMenuVisible={isMenuVisible}
                                        hideMenu={hideMenu}
                                        showMenu={showMenu}
                                    />
                                    <View style={styles.divider}></View>

                                    <View style={styles.channelNameView}>
                                        <ChannelCard
                                            handleshowMore={showMore}
                                            showmore={showmore}
                                        />
                                    </View>

                                    <View style={styles.divider}></View>

                                    <View style={[styles.row2, styles.channelNameView]}>
                                        <Text style={styles.boldText}>11 Comments</Text>
                                        <Text style={{ marginLeft: 30 }}>Sort</Text>
                                    </View>

                                    <CommentsBox />

                                    <Comments
                                        showReplyBox={showReplyBox}
                                        hideReplyBox={hideReplyBox}
                                        isVisible={isReplyBoxVisible}
                                    />
                                    <Comments />
                                </>
                            </View>
                            <View style={styles.list}>
                                {list?.map((item, index) => {
                                    return (
                                        <VideoCard
                                            handlePress={() => handleVideoPress(item)}
                                            key={`key${index}`}
                                            item={item}
                                            index={index}
                                        />
                                    );
                                })}
                            </View>

                        </View>
                    </View> :
                    null}


            </View>
        </ScrollView>
    )
}

export default Feed
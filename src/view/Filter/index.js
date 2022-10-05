import React, { useEffect, } from "react";
import { ScrollView, View, Text, Dimensions, Platform } from "react-native";

import { getSearchData } from "../../utility";
import SearchBar from "../../components/Search";
import FilterCard from "../../components/FilterCard";
import styles from "./styles";


function Filter({ navigation, route }) {

    useEffect(() => {
        fetchSearchData()
    }, []);

    const [state, updateState] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            list: [],
            nextPageToken: null,
            select_index: null,
            search: route.params?.searchValue,
        }
    );
    const { list, nextPageToken, select_index, search, itemToRender } = state;

    const fetchSearchData = async () => {
        let obj = {
            nextPageToken: nextPageToken,
            value: search
        };
        await getSearchData(obj).then((res) => {
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

    const handleSearchValue = (value) => { updateState({ search: value }) };
    const handleDrawer = () => { navigation.openDrawer(); };
    const handleSearchPress = () => { }
    const showMenu = (index) => { updateState({ select_index: index }) };
    const hideMenu = () => { updateState({ select_index: null }) };
    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                onChangeText={handleSearchValue}
                searchText={search}
                handleSearchPress={handleSearchPress}
                handleDrawer={handleDrawer}
            />
            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        fetchSearchData();
                    };
                }}
                scrollEventThrottle={400}
                style={{ flex: 1 }}>

                {list?.map((item, index) => {
                    return (
                        <FilterCard
                            item={item}
                            index={index}
                            select_index={select_index}
                            handleMenu={() => showMenu(index)}
                            hideMenu={() => hideMenu()}
                            handlePress={() => navigation.navigate('Feed', item)}
                        />
                    );
                })};
            </ScrollView>
        </View>
    );
};
export default Filter;
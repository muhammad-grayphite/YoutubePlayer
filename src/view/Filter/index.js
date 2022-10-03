import React, { useEffect, } from "react";
import { ScrollView, View, Text } from "react-native";
import SearchBar from "../../components/Search";
import FilterCard from "../../components/FilterCard";
import styles from "./styles";

var distanceFromEnd = 0;


function Filter({ navigation }) {
    useEffect(() => {
        // fetchData()
    }, []);

    const [state, updateState] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            list: [],
            nextPageToken: null,
            select_index: null,
            search: '',
        }
    )
    const { list, nextPageToken, select_index, search, itemToRender } = state


    const handleSearchValue = (value) => {
        updateState({ search: value })
    }

    const handleSearchPress = () => {
        navigation.navigate('Filter')
    }

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                onChangeText={handleSearchValue}
                searchText={search}
                handleSearchPress={handleSearchPress}
            />
            <ScrollView
                scrollEventThrottle={300}
                onScroll={(event) => {
                    let itemHeight = 280;
                    let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
                    let currentItemIndex = Math.ceil(currentOffset / itemHeight);
                    if (distanceFromEnd) {
                        if (currentItemIndex >= distanceFromEnd) {
                            //   fetchData()
                        }
                    } else {
                        distanceFromEnd = 4;
                    }
                }}
                style={styles.container}
            >
                <View style={styles.outerView}>
                    <View style={styles.sideMenu}></View>
                    <View>
                        <Text>zae</Text>
                    </View>
                    {/* <FilterCard /> */}
                </View>



            </ScrollView>
        </View>
    )
}

export default Filter
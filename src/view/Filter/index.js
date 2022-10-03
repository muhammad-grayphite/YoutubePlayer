import React, { useEffect, } from "react";
import { ScrollView, View, Text, Dimensions } from "react-native";
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
        <ScrollView
            stickyHeaderIndices={[1]}
            style={{ flex: 1, }}>
            <SearchBar
                onChangeText={handleSearchValue}
                searchText={search}
                handleSearchPress={handleSearchPress}
            />

            <View style={styles.outerView}>

                <View style={styles.sideMenu}></View>

                <View style={{ flex: 1, }}>
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                    <FilterCard />
                </View>
            </View>


        </ScrollView>
    )
}

export default Filter
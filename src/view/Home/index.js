import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";

import SearchBar from '../../components/Search';
import Card from "../../components/card";
import { fetchVideos } from "../../utility";
import { isCloseToBottom } from "../../assets/RandomFun";
import styles from "./styles";


function Home({ navigation }) {

  React.useEffect(() => {
    fetchData();
  }, []);

  const [state, updateState] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      list: [],
      nextPageToken: null,
      select_index: null,
      search: '',
      itemToRender: 10,
    }
  );
  const { list, nextPageToken, select_index, search, itemToRender } = state;

  const fetchData = async () => {
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

  const showMenu = (index) => { updateState({ select_index: index }) };
  const hideMenu = () => { updateState({ select_index: null }) };
  const handleSearchValue = (value) => { updateState({ search: value }) };
  const handleSearchPress = () => { navigation.navigate('Filter', { searchValue: search }) };
  const handleDrawer = () => { navigation.openDrawer() };

  return (
    <View style={{ flex: 1, }}>
      <SearchBar
        onChangeText={handleSearchValue}
        searchText={search}
        handleSearchPress={() => {
          search?.length > 0 ?
            handleSearchPress() : {}
        }}
        handleDrawer={handleDrawer}
      />
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            fetchData();
          };
        }}
        scrollEventThrottle={400}
        style={styles.container}
      >
        <View style={styles.cardWraper}>
          {list?.map((item, index) => {
            return (
              <Card
                item={item}
                index={index}
                key={index}
                handleMenu={() => showMenu(index)}
                hideMenu={() => hideMenu()}
                select_index={select_index}
                handlePress={() => navigation.navigate('Feed', item)}
              />
            );
          })};
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
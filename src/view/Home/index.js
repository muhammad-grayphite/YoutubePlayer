import * as React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";
import Card from "../../components/card";
import { videos } from "../../constants/values";
import { fetchVideos } from "../../utility";
import styles from "./styles";


var distanceFromEnd = 0;

function Home({ navigation }) {

  React.useEffect(() => {
    fetchData();
  }, []);

  const video = React.useRef(null);

  const [state, updateState] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      list: [],
      nextPageToken: null,
      select_index: null
    }
  )

  const { list, nextPageToken, select_index } = state

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

        }
      } catch (error) {alert(error?.error?.message);}
    }).catch((error) => { alert('somthing went wrong');})
  }

  const showMenu = (index) => {
    updateState({ select_index: index });
  };
  const hideMenu = () => {
    updateState({ select_index: null });
  };


  return (
    
      <ScrollView
      scrollEventThrottle={300}
        onScroll={(event) => {
          let itemHeight = 280;
          let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
          let currentItemIndex = Math.ceil(currentOffset / itemHeight);
          if (distanceFromEnd) {
            if (currentItemIndex >= distanceFromEnd) {
              fetchData()
            }
          } else {
            distanceFromEnd = 4;
          }
        }}
        style={styles.container}
      >


        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {list?.map((item, index) => {
            return (
              <Card
                item={item}
                index={index}
                key={index}
                handleMenu={() => showMenu(index)}
                hideMenu={() => hideMenu()}
                select_index={select_index}
                // to={{ screen: 'Feed', params: { item } }}
                handlePress={() => navigation.navigate('Feed', item)}
              />
            );
          })}
        </View>
        
      </ScrollView>  
  )
}

export default Home
import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Hoverable, Resizable } from "react-native-web-hooks";
import { dots,queue , share , clock, pie } from "../assets";


const MenuList = (props) => {
  const [isHover, setHover] = useState(false);
  const [iswatchlater, setWatchlater] = useState(false);
  const [isSaveToPlaylist, setSaveToPlayList] = useState(false);
  const [isShare, setShare] = useState(false);
  const [isNotInterested, setNotInterested] = useState(false);
  const [isNotRecomend, setNotRecomend] = useState(false);
  const [isReport, setReport] = useState(false);

  const { select_index, handleMenu, index, hideMenu } = props;
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        right: 0
        // left: 150
      }}
    >
      <Menu
        visible={select_index === index ? true : false}
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
          width: 248,
          justifyContent: "center",
          alignItems: "center"
        }}
        onRequestClose={hideMenu}
      >
        <Hoverable
          onHoverIn={() => {
            setHover(true);
          }}
          onHoverOut={() => setHover(false)}
        >
          <MenuItem
            style={{
              height: 35,
              paddingTop: 10,
              backgroundColor: isHover ? "#D3D3D3" : "white"
            }}
          >
            <View style={[styles.row]}>
              <Image source={queue} style={styles.iconStyle} />
              <Text>Add to queue</Text>
            </View>
          </MenuItem>
        </Hoverable>

        <Hoverable
          onHoverIn={() => {
            setWatchlater(true);
          }}
          onHoverOut={() => setWatchlater(false)}
        >
          <MenuItem
            style={{
              height: 35,
              backgroundColor: iswatchlater ? "#D3D3D3" : "white"
            }}
          >
            <View style={styles.row}>
              <Image source={clock} style={styles.iconStyle} />
              <Text>Save to Watch later</Text>
            </View>
          </MenuItem>
        </Hoverable>

        <Hoverable
          onHoverIn={() => {
            setSaveToPlayList(true);
          }}
          onHoverOut={() => setSaveToPlayList(false)}
        >
          <MenuItem
            style={{
              height: 35,
              backgroundColor: isSaveToPlaylist ? "#D3D3D3" : "white"
            }}
          >
            <View style={styles.row}>
              <Image source={queue} style={styles.iconStyle} />
              <Text>Save to playliset</Text>
            </View>
          </MenuItem>
        </Hoverable>

        <Hoverable
          onHoverIn={() => {
            setShare(true);
          }}
          onHoverOut={() => setShare(false)}
        >
          <MenuItem
            style={{
              height: 35,
              backgroundColor: isShare ? "#D3D3D3" : "white"
            }}
          >
            <View style={styles.row}>
              <Image source={share} style={styles.iconStyle} />
              <Text>Share </Text>
            </View>
          </MenuItem>
        </Hoverable>

        <MenuDivider />

        <Hoverable
          onHoverIn={() => {
            setNotInterested(true);
          }}
          onHoverOut={() => setNotInterested(false)}
        >
          <MenuItem
            style={{
              height: 35,
              backgroundColor: isNotInterested ? "#D3D3D3" : "white"
            }}
          >
            <View style={styles.row}>
              <Image source={queue} style={styles.iconStyle} />
              <Text>Not interested</Text>
            </View>
          </MenuItem>
        </Hoverable>

        {/* <MenuDivider /> */}
        <Hoverable
          onHoverIn={() => {
            setNotRecomend(true);
          }}
          onHoverOut={() => setNotRecomend(false)}
        >
          <MenuItem
            style={{
              height: 35,
              backgroundColor: isNotRecomend ? "#D3D3D3" : "white"
            }}
          >
            <View style={styles.row}>
              <Image source={queue} style={styles.iconStyle} />
              <Text>Don`t recommended channel!</Text>
            </View>
          </MenuItem>
        </Hoverable>

        <Hoverable
          onHoverIn={() => {
            setReport(true);
          }}
          onHoverOut={() => setReport(false)}
        >
          <MenuItem
            style={{
              height: 35,
              backgroundColor: isReport ? "#D3D3D3" : "white"
            }}
          >
            <View style={styles.row}>
              <Image source={pie} style={styles.iconStyle} />
              <Text>Report</Text>
            </View>
          </MenuItem>
        </Hoverable>
      </Menu>
    </View>
  );
};
export default MenuList;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  hover_color: {
    backgroundColor: "red"
  },
  menuItem_style: {
    height: 35
  }
});

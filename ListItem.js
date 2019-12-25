import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

const ListItem = props => {
  return (
    <TouchableHighlight onPress={() => props.deleteItem(props.index)}>
      <View style={styles.listItem}>
        <Image source={props.placeImage} style={styles.placeImage} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: "5%",
    margin: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    width: 50,
    height: 50
  }
});

export default ListItem;

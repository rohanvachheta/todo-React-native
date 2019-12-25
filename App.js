import React from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import ListItem from "./ListItem";
import Imageprop from "./assets/icon.png";
import PlaceDetails from "./src/components/listItem/PlaceDetails/PlaceDetails";

export default function App() {
  const [value, onChangeText] = React.useState("");
  const [array, setarray] = React.useState([]);
  const [selectedItem, setselectedItem] = React.useState(null);

  const handleChange = text => {
    onChangeText(text);
  };

  const placeSubmit = () => {
    if (value.trim()) {
      setarray([
        ...array,
        {
          key: Math.random(),
          value,
          image: {
            uri: "https://picsum.photos/seed/picsum/200/300"
          }
        }
      ]);
    }
  };

  const delteItem = key => {
    const newarray = array.filter((item, i) => item.key !== key);
    setarray(newarray);
    setselectedItem(null);
  };

  const onItemSelected = key => {
    const item = array.find(item => item.key === key);
    setselectedItem(item);
  };

  return (
    <View style={styles.container}>
      <PlaceDetails
        selectedItem={selectedItem}
        cancleItem={() => setselectedItem(null)}
        deleteItem={delteItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleChange}
          value={value}
          style={styles.placeInput}
          placeholder="enter text"
          onSubmitEditing={placeSubmit}
        />
        <Button
          title="Press me"
          style={styles.placeBtn}
          onPress={placeSubmit}
        />
      </View>
      <FlatList
        keyExtractor={item => item.key.toString()}
        style={{ width: "100%" }}
        data={array}
        renderItem={info => (
          <ListItem
            index={info.item.key}
            placeName={info.item.value}
            deleteItem={onItemSelected}
            placeImage={info.item.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeBtn: {
    width: "30%"
  }
});

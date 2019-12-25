import React, { Component } from "react";
import { Text, View, Modal, Image, Button, StyleSheet } from "react-native";

export class PlaceDetails extends Component {
  render() {
    let modalContent = null;
    if (this.props.selectedItem) {
      modalContent = (
        <View>
          <Image
            source={this.props.selectedItem.image}
            style={styles.placeImage}
          />
          <Text style={styles.placeName}>{this.props.selectedItem.value}</Text>
        </View>
      );
    }

    return (
      <Modal
        onRequestClose={this.props.cancleItem}
        visible={this.props.selectedItem !== null}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          {modalContent}
          <View>
            <Button
              title="delete"
              color="red"
              onPress={() => this.props.deleteItem(this.props.selectedItem.key)}
            />
            <Button title="cancle" onPress={this.props.cancleItem} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  },
  placeImage: {
    width: "100%",
    height: 200,
    shadowOpacity: 3
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default PlaceDetails;

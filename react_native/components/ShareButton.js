import React from "react";
import { Share, View, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ShareButton = ({ url }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <TouchableOpacity onPress={onShare} style={{ padding: 5 }}>
      <FontAwesome name={"share-square-o"} size={40} color="gray" />
    </TouchableOpacity>
  );
};

export default ShareButton;

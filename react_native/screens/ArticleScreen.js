import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { addClip, deleteClip } from "../store/actions/user";
import ClipButton from "../components/ClipButton";
import Loading from "../components/Loading";
import ShareButton from "../components/ShareButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default function ArticleScreen({ route }) {
  const { article } = route.params;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { clips } = user;

  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonGroup}>
        <ClipButton onPress={toggleClip} enabled={isClipped()} />
        <ShareButton url={article.url} />
      </View>
      <WebView
        style={styles.container}
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
      />
    </SafeAreaView>
  );
}

import React from "react";
import { Platform, View } from "react-native";
import { AdMobInterstitial } from "expo-ads-admob";

async function Interstitial() {
  AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712"); // テスト広告
  await AdMobInterstitial.requestAdAsync();
  await AdMobInterstitial.showAdAsync();
}

export default { Interstitial };

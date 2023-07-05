import { Slider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} onPress={() => {
      navigation.navigate("welcome");
    }}><View style={styles.ZKXeUfFr}></View><Pressable><Text style={styles.dZPaAcYs}>Lorem ipsum…</Text></Pressable><Slider style={styles.FCfUmrHf} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="fasfsadfdsfdfd" maximumValue={1} minimumValue={0} disabled={true} value={9}></Slider></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ZKXeUfFr: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  dZPaAcYs: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  FCfUmrHf: {
    width: 150,
    height: 40
  }
});
export default Untitled2;
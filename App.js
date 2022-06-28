import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.view1, {alignSelf: "stretch" }]}/>
        <View style={[styles.view2, {alignSelf: "center" }]}/>
        <View style={[styles.view3, {alignSelf: "center" }]}/>
      <View style={{flexDirection: 'row', justifyContent:'center', alignItems: "center" }}>
        <View style={{marginTop:30, width: 190, height: 78, backgroundColor: 'powderblue'}} />
        <View style={{marginTop:30, width: 190, height: 78, backgroundColor: 'skyblue'}} />
      </View>
      <View style={{height: 13, backgroundColor: 'red'}} />
      <View style={[styles.container, {flexWrap:"wrap", flexDirection: 'row', justifyContent: "center"}]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={{height: 60, backgroundColor: '#1B7985'}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5ECEA",
    flex: 1,
  },
  view1: {
    backgroundColor: "#50E3C2",
    height: 25,
  },
  view2: {
    backgroundColor: "#F5A623",
    width:100,
    height: 100,
    marginTop: 50,
  },
  view3: {
    backgroundColor: "#F5A623",
    width:200,
    height: 30,
    marginTop: 20,
  },
  box: {
    backgroundColor: "#8317A9",
    width: 80,
    height: 80,
    margin: 4,
  },  
});






/*import React from 'react';
import { View } from 'react-native';

const FixedDimensions= () => {
  return (
    <View>
      <View style={{
        height: 25, 
        backgroundColor: 'powderblue'
      }} />
      <View style={{
        width: 100, 
        height: 100,
        marginTop: 20,
        left: 140,
        backgroundColor: 'skyblue'
      }} />
      <View style={{
        width: 150, 
        height: 30,
        marginTop: 15,
        left: 115, 
        backgroundColor: 'steelblue'
      }} />
        <View style={{
          width: 190, 
          height: 78,
          marginTop: 15,
          backgroundColor: 'red'
      }} />
        <View style={{
          width: 190, 
          height: 78,
          marginTop:-78,
          left:190,
          backgroundColor: 'blue'
      }} />
        <View style={{
          height: 13,
          backgroundColor: 'green'
      }} />
        <View style={{
          width:100,
          height: 100,
          marginTop: 40,
          left:10,
          backgroundColor: 'blue'
      }} />
        <View style={{
          width:100,
          height: 100,
          marginTop: 40,
          left:10,
          backgroundColor: 'blue'
      }} />        
        <View style={{
          width:100,
          height: 100,
          marginTop:-240,
          left:140,
          backgroundColor: 'blue'
      }} />
        <View style={{
          width:100,
          height: 100,
          marginTop:40,
          marginBottom:10,
          left:140,
          backgroundColor: 'blue'
      }} />
        <View style={{
          width:100,
          height: 100,
          marginTop:-250,
          marginBottom:10,
          left:260,
          backgroundColor: 'blue'
      }} />
        <View style={{
          width:100,
          height: 100,
          marginTop:30,
          marginBottom:35,
          left:260,
          backgroundColor: 'blue'
      }} />
        <View style={{
          height: 60,
          backgroundColor: 'purple'
      }} />

    </View>
  );
};
export default FixedDimensions;*/
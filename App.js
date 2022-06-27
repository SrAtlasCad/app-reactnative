import React from 'react';
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
export default FixedDimensions;
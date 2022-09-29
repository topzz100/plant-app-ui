import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import {MaterialIcons} from '@expo/vector-icons'
import plants from '../../consts/plants'

const DetailsScreen = ({navigation, route}) => {
  const plant = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()}/>
        <MaterialIcons name='shopping-cart' size={28}/>
      </View>
      <View style={styles.imageContainer}>
        <Image source={plants[0].img} style={{resizeMode: 'contain', flex: 1, width: '100%', height: '100%'}}/>
      </View> 
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <View style={styles.line}/>
          <Text 
            style={{
              fontSize: 18,
              fontWeight: 'bold'
            }}
            >
            Best choice
          </Text>
        </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
            <View style={styles.priceTag}>
              <Text 
                style={{
                  marginLeft: 15,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                ${plant.price}
              </Text>
            </View>
          </View>
        <View 
          style={{
            paddingHorizontal: 20,
            marginTop: 10
            }}
        >
          <Text
            style={{
              fontSize: 20, 
              fontWeight: 'bold'
            }}
          >
            About
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10
            }}
          >
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold'
                }}
              >
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text
                style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}
              >
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'row',
    alignItems: 'center'
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText:{
    fontWeight: 'bold',
    fontSize: 20
  },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25
  },

})

export default DetailsScreen
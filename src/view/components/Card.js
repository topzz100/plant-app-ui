import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import plants from '../../consts/plants'
import {MaterialIcons} from '@expo/vector-icons'

const Card = ({plant}) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8}
    >
      <View style={styles.card}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: plants.like?
                'rgba(245, 42,42, 0.2)':
                'rgba(0,0,0,0.2)'
            }}
          >
            <MaterialIcons
              name='favorite' 
              size={18}
              color={plants.like? COLORS.red : COLORS.black}
            />
          </View>
        </View>

        <View
          style={{
            height: 100,
            alignItems: 'center'
          }}
        >
          <Image
            source={'../../assets/plant1.png'}
            style={{
              flex: 1,
              resizeMode: 'contain'
            }}
          />
        </View>
        <Text 
          style={{
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: 10
          }}
        >
          {plant.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold'
            }}
          >
            ${plant.price}
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: COLORS.green,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 22, 
                color: COLORS.white, 
                fontWeight: 'bold'
              }}
            >
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  }
})

export default Card
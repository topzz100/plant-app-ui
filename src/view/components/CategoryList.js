import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../consts/colors'

const CategoryList = () => {
  const [categoryIndex, setCategoryImdex] = useState(0)
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC']
  return (
    <View style={styles.categoryContainer}>
      {
        categories.map((item, index) => (
          <TouchableOpacity
            Key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryImdex(index)}
          >
            <Text 
              style={[
                styles.categoryText,
                categoryIndex ===  index && styles.categoryTextSelected
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  )
}
const styles = StyleSheet.create({
  categoryContainer:{
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold'
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green
  }
})

export default CategoryList
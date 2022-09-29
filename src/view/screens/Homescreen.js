import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import COLORS from '../../consts/colors'
import plants from '../../consts/plants'
import {MaterialIcons} from '@expo/vector-icons'
import CategoryList from '../components/CategoryList';
import Card from '../components/Card';

export default function Homescreen({navigation}) {
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: COLORS.white
    }}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: COLORS.green, fontWeight: 'bold'}}>Plant Shop</Text>
        </View>
        <MaterialIcons name='shopping-cart' size={28}/>
      </View>
      <View style={{
        marginTop: 30,
        flexDirection: 'row'
      }}>
        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={25} style={{marginLeft: 20}}/>
          <TextInput placeholder='Search' style={styles.input}/>
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name='sort' size={30} color={COLORS.white}/>
        </View>
      </View>
      <CategoryList/>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => (
          <Card plant={item} navigation={navigation}/>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
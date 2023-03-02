import React from 'react'
import { FlatList, ScrollView, View, Text } from 'react-native'

const data = [
    { key: 'Devin' },
    { key: 'Dan' },
    { key: 'Dominic' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' },
]

function List() {
  return (
    <ScrollView>
      <FlatList
        data={ data }
        renderItem={ ({item}) => <Text style={{color: "grey", textAlign: "center", paddingBottom: 20}}>{ item.key }</Text>}
      />
    </ScrollView>
  )
}

export default List

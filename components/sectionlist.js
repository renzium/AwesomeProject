import React from 'react'
import { SectionList, View, Text } from 'react-native'

const sections = [
  { title: "A", data: ["Apple", "Ape", "Akpu"] },
  { title: "B", data: ["Bread", "Beans", "Bingo"] },
  { title: "C", data: ["Cow", "Cow", "Cake"] }
]

function Section() {
  return (
    <View>
      <SectionList
        sections={ sections }
        renderItem={ ({ item }) => <Text style={ { textAlign: "center" } }>{ item }</Text> }
        renderSectionHeader={ ({ section }) => <Text style={ { backgroundColor: "grey", textAlign: "center" } }>{ section.title }</Text> }
      />
    </View>
  )
}

export default Section

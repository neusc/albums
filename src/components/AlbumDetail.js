/**
 *
 * Created by chuans
 * Date: 2018/3/7
 */
import React from 'react'
import { View, Text, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({ album }) => {
  // destruct object
  const { title, artist, thumbnail_image } = album
  const { headerContentStyle, thumbStyle } = styles

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbStyle: {
    width: 50,
    height: 50
  }
}

export default AlbumDetail

import { View, Text } from 'react-native'
import {Redirect} from 'expo-router'

const index = () => {
  return (
    <Redirect href={"/Home"}/>
  )
}

export default index
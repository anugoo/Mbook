import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

const UserPage = () => {
 const { id, ipro } = useLocalSearchParams<{ id: string; ipro: string }>();
 return (
   <View><Text>
       user page - {id} - {ipro}
     </Text></View>);};
export default UserPage;

import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router'; // Import the router hook

const About = () => {
  const router = useRouter(); // Initialize router

  return (
    <View >
      <Pressable
        onPress={() =>
          router.push({
            pathname: "../Aboutus" // Corrected pathname for the route
             // Passing params if needed
          })
        }
      >
        <Text >About Us</Text>
      </Pressable>
    </View>
  );
};



export default About;

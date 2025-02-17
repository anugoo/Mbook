import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Home2 page</Text>

      <Pressable
        onPress={() => {
          router.push("/Home/Home3"); // Navigate to Home tab (index view)
        }}
      >
        <Text>Next Home</Text>
      </Pressable>
    </View>
  );
};

export default Home;

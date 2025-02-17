import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Home3 = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Home3 page</Text>

      <Pressable
        onPress={() => {
            router.push("/Home/Home2"); // Navigate to Home tab (index view)
          }}
      >
        <Text>Back to Home-2</Text>
      </Pressable>
    </View>
  );
};

export default Home3;

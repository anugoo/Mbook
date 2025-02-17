import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Home2"  
        options={{  headerTitle: "Home 2" }} 
      />
      <Stack.Screen 
        name="Home3" 
        options={{   headerTitle: "Home 3" }} 
      />
      
      <Stack.Screen name="*" />
    </Stack>
  );
};

export default MainLayout;

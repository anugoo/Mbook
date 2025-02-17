import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Home1"  
        options={{  headerTitle: "Home 1" }} 
      />
      <Stack.Screen 
        name="Home2" 
        options={{   headerTitle: "User 2" }} 
      />
      
      <Stack.Screen name="*" />
    </Stack>
  );
};

export default MainLayout;

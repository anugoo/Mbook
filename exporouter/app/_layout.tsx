import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="index"  
        options={{  headerTitle: "Home Page" }} 
      />
      <Stack.Screen 
        name="user/[id]" 
        options={{   headerTitle: "User Page" }} 
      />
      
      <Stack.Screen name="*" />
    </Stack>
  );
};

export default MainLayout;

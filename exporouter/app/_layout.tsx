import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack >
      
       <Stack.Screen 
        name="(tabs)"  
        options={{ headerShown: false}} 
      />
      
      
      <Stack.Screen name="Aboutus" options={{   headerTitle: "About us Page" }}   />
    </Stack>
  );
};

export default MainLayout;

import { Tabs } from "expo-router";
// Importing AntDesign component
import AntDesign from '@expo/vector-icons/AntDesign';

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          headerTitle: "Home Page",
          title:"Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} /> // Ant Design icon for Home tab
          ),
        }}
      />
      <Tabs.Screen
        name="user/[id]" // Ensure the correct path for user page
        options={{
          headerTitle: "User Page",
          title:"User",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} /> // Ant Design icon for User tab
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          headerTitle: "About Page",
          title:" About",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="checkcircle" size={size} color={color} /> // Ant Design icon for Home tab
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

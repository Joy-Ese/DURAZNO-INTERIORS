import React, { useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import ItemScreen from '../ItemScreen';
import AddToCart from '../AddToCart';
import LogOut from '../LogOut';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    useEffect(() => {
        registerForPushNotification();
    }, []);
    const registerForPushNotification = async () => {
    try {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permission.granted) return;
        const token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        
    } catch (error) {
        console.log("Error getting token", error);
    }
    };

return (
<Tab.Navigator>
    <Tab.Screen 
        name="ITEMS"
        component={ItemScreen}
        options={{ headerShown: false }}
    />
    <Tab.Screen 
        name="ADD TO CART"
        component={AddToCart}
        options={{ headerShown: false }}
    />
    <Tab.Screen 
        name="LOG OUT"
        component={LogOut}
        options={{ headerShown: false }}
    />
</Tab.Navigator>
);
};

export default TabNavigator;

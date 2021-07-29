import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListNotes from '../screens/ListNotes';
import AddNotes from '../screens/AddNotes';

const Stack = createStackNavigator();

export const InitNavigator = () => {

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white'
				}
			}}
		>
			<Stack.Screen name="ListNotes" component={ListNotes} />
			<Stack.Screen name="AddNotes" component={AddNotes} />


		</Stack.Navigator>
	);
}

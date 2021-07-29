import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Fab() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>+</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 10,
		right: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	text: {
		color: "#fff",
		fontSize: 20,
		fontWeight: 'bold',
	}
})

import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fab from '../components/Fab'

export default function ListNotes() {
	const [notes, setNotes] = useState([])

	return (

		<View style={styles.container}>
			{notes.length > 0 ?
				<View style={styles.mainContainer}>
					<Text>Notes</Text>
				</View> :
				<View style={styles.mainContainer}>
					<Text>Please add a note.</Text>
				</View>

			}
			<Fab />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

import { View, Text, StyleSheet } from 'react-native';

export default function EmptyList() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Cette Liste est vide !</Text>
			<Text style={styles.text}>
				Vous pouvez ajouter des éléments en faisant un pull to refresh !
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 24,
		fontStyle: 'italic',
		textAlign: 'center',
	},
});

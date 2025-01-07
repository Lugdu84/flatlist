import { View, Text, StyleSheet } from 'react-native';

type ItemViewProps = {
	item: ItemData;
};

export default function ItemView({ item }: ItemViewProps) {
	return (
		<View style={styles.itemContainer}>
			<Text style={styles.title}>{item.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		padding: 20,
		backgroundColor: 'lightgray',
	},
	title: {
		fontSize: 24,
	},
});

import { Text, StyleSheet } from 'react-native';

type FooterListProps = {
	numberOfItems: number;
};

export default function FooterList({ numberOfItems }: FooterListProps) {
	return (
		<Text style={styles.text}>
			Il y a {numberOfItems} éléments dans la liste !
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontStyle: 'italic',
		textAlign: 'center',
	},
});

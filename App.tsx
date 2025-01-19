import { useState } from 'react';
import {
	FlatList,
	RefreshControl,
	SectionList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import EmptyList from './components/EmptyList';
import FooterList from './components/FooterList';
import InputSearch from './components/InputSearch';
import ItemView from './components/ItemView';

export default function App() {
	const [refreshing, setRefreshing] = useState(false);

	const [data, setData] = useState<ItemData[]>([
		{ id: '1', title: 'javascript' },
		{ id: '2', title: 'swift' },
		{ id: '3', title: 'java' },
		{ id: '4', title: 'React' },
		{ id: '5', title: 'Anuglar' },
		{ id: '6', title: 'Vue' },
		{ id: '7', title: 'Express' },
		{ id: '8', title: 'Nest' },
		{ id: '9', title: 'React Native' },
		{ id: '10', title: 'SwiftUI' },
		{ id: '11', title: 'UIKit' },
	]);
	const [sections, setSections] = useState([
		{
			title: 'Langages',
			data: [
				{ id: '1', title: 'javascript' },
				{ id: '2', title: 'swift' },
				{ id: '3', title: 'java' },
			],
		},
		{
			title: 'Framworks web',
			data: [
				{ id: '4', title: 'React' },
				{ id: '5', title: 'Anuglar' },
				{ id: '6', title: 'Vue' },
			],
		},
		{
			title: 'Framworks back',
			data: [
				{ id: '7', title: 'Express' },
				{ id: '8', title: 'Nest' },
			],
		},
		{
			title: 'Framworks mobile',
			data: [
				{ id: '9', title: 'React Native' },
				{ id: '10', title: 'SwiftUI' },
				{ id: '11', title: 'UIKit' },
			],
		},
	]);

	const handleRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setData([
				...data,
				{ id: `${data.length + 1}`, title: `Item ${data.length + 1}` },
			]);
			setRefreshing(false);
		}, 2000);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<FlatList
					contentContainerStyle={styles.content}
					data={data}
					renderItem={({ item }) => <ItemView item={item} />}
					keyExtractor={(item) => item.id}
					ListFooterComponent={<FooterList numberOfItems={data.length} />}
					ListFooterComponentStyle={styles.footerStyle}
					ListHeaderComponent={<InputSearch />}
					ListHeaderComponentStyle={styles.headerStyle}
					ListEmptyComponent={<EmptyList />}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={handleRefresh}
							colors={['red', 'green', 'blue']}
							tintColor="red"
							title="Refreshing..."
							titleColor="red"
						/>
					}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'white',
	},
	flatlist: {
		// style pour la flatlist
	},
	content: {
		padding: 10,
		gap: 10,
	},
	footerStyle: {
		backgroundColor: 'red',
		padding: 10,
	},
	headerStyle: {
		backgroundColor: 'blue',
		padding: 10,
	},
});

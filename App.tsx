import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import EmptyList from './components/EmptyList';
import FooterList from './components/FooterList';
import InputSearch from './components/InputSearch';
import { useState } from 'react';
import ItemView from './components/ItemView';

export default function App() {
	const [refreshing, setRefreshing] = useState(false);

	const [data, setData] = useState<ItemData[]>([
		{ id: '1', title: 'Item 1' },
		{ id: '2', title: 'Item 2' },
		{ id: '3', title: 'Item 3' },
		{ id: '4', title: 'Item 4' },
		{ id: '5', title: 'Item 5' },
		{ id: '6', title: 'Item 6' },
		{ id: '7', title: 'Item 7' },
		{ id: '8', title: 'Item 8' },
		{ id: '9', title: 'Item 9' },
		{ id: '10', title: 'Item 10' },
		{ id: '11', title: 'Item 11' },
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
					// refreshControl={
					// 	<RefreshControl
					// 		refreshing={refreshing}
					// 		onRefresh={handleRefresh}
					// 	/>
					// }

					refreshing={refreshing}
					onRefresh={handleRefresh}
					// numColumns={2}
					// columnWrapperStyle={{ gap: 10 }}
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

import React, { useEffect, useState } from 'react';
import DelayInput from 'react-native-debounce-input';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import Container, { ContainerSafeView } from '../components/base-ui/Container';
import ContainerImage from '../components/base-ui/ContainerImage';
import HeaderApp from '../components/base-ui/HeaderApp';
import { TextB } from '../components/base-ui/TextAtm';
import { View } from '../components/Themed';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { kidData } from '../utils/data';
import { Audio } from 'expo-av';
import { SOUND } from './kid/Sound';
const Item = ({ title }) => (
	<View>
		<View style={styles.item}>
			<TextB size={responsiveFontSize(2)} color={'#fff'}>
				{title}
			</TextB>
		</View>
	</View>
);
const Chapters = ({ navigation }) => {
	const [allData, setAllData] = useState<any[]>([]);
	const [sound, setSound] = useState<any>();
	const [query, setQuery] = useState<string>('');

	async function playSound() {
		const { sound } = await Audio.Sound.createAsync(SOUND[0].sound, {
			isLooping: true,
		});
		setSound(sound);
		await sound.playAsync();
	}
	useEffect(() => {
		return sound
			? () => {
					sound.unloadAsync();
			  }
			: undefined;
	}, [sound]);
	useEffect(() => {
		playSound();
	}, []);

	useEffect(() => {
		let kidDatas = kidData;
		if (query?.length > 0) {
			kidDatas = kidData.filter((x) =>
				x?.title?.toLowerCase().includes(query?.toLowerCase())
			);
		}

		setAllData(kidDatas);
	}, [query]);

	const gotoCard = (item) => {
		navigation.navigate('Kids', { page: item.page });
		return;
	};

	const renderItem = ({ item }) => (
		<Pressable onPress={() => gotoCard(item)}>
			{<Item title={item.title} />}
		</Pressable>
	);

	function renderHeader() {
		return (
			<View
				style={{
					backgroundColor: '#f8f8f8',
					padding: 10,
					marginVertical: 10,
					borderRadius: 20,
				}}
			>
				<DelayInput
					value={query}
					minLength={3}
					onChangeText={setQuery}
					placeholder="search by chapter title"
					delayTimeout={500}
				/>
			</View>
		);
	}
	return (
		<Container>
			<ContainerImage source={require('../assets/images/MainBG.png')} />
			<ContainerSafeView>
				<HeaderApp title={'Chapters'} />
				<FlatList
					ListHeaderComponent={renderHeader}
					data={allData}
					renderItem={renderItem}
					keyExtractor={(item) => item.title}
				/>
			</ContainerSafeView>
		</Container>
	);
};

export default Chapters;

const styles = StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#ff1f1f',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	header: {
		paddingTop: 8,
		backgroundColor: '#000',
		marginHorizontal: 16,
	},
});

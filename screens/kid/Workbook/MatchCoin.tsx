import React, { useEffect, useState } from 'react';
import { Image, Text, View, Dimensions, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import { SOUND } from '../Sound';
import { Audio } from 'expo-av';
import penny from '../../../assets/images/penny.png';
import quarter from '../../../assets/images/quarter.png';
import nickel from '../../../assets/images/nickel.png';
import dime from '../../../assets/images/dime.png';
import CustomButton from '../../../components/buttonc';

const options = [
	{ image: quarter, name: '25C', coin: 'Quarter' },
	{ image: penny, name: '1C', coin: 'Penny' },
	{ image: dime, name: '10C', coin: 'Dime' },
	{ image: nickel, name: '5C', coin: 'Nickel' },
];
const MatchCoin = () => {
	const [selected, setSeleted] = useState([]);
	const [sorted, setSorted] = useState({
		Nickel: false,
		Quarter: false,
		Penny: false,
		Dime: false,
	});
	const width = Dimensions.get('window').width;
	const phoneWidth = width < 500 ? true : false;
	const [sound, setSound] = useState();

	async function playSound(type) {
		const { sound } = await Audio.Sound.createAsync(
			type === 'correct' ? SOUND[5].sound : SOUND[4].sound
		);
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
	const checkDrop = (event, gestureState, bounds, id) => {
		console.log(
			'droped image id: ',
			id,
			'X from top screen : ',
			gestureState.moveX,
			'Y from top screen : ',
			gestureState.moveY
		);
		if (gestureState.moveX > 260 && gestureState.moveX < 320) {
			// adding to the selected list
			if (gestureState.moveY > 362 && gestureState.moveY < 430) {
				if (id === 'Penny') {
					setSorted({
						...sorted,
						Penny: true,
					});
					playSound('correct');
					alert('Penny sorted successful');
					setSeleted([...selected, id]);
					return;
				}
			} else if (gestureState.moveY > 518 && gestureState.moveY < 583) {
				if (id === 'Nickel') {
					setSorted({
						...sorted,
						Nickel: true,
					});
					playSound('correct');
					alert('Nickel sorted successful');
					setSeleted([...selected, id]);
					return;
				}
			} else if (gestureState.moveY > 265 && gestureState.moveY < 339) {
				if (id === 'Quarter') {
					setSorted({
						...sorted,
						Quarter: true,
					});
					playSound('correct');
					alert('Quarter sorted successful');
					setSeleted([...selected, id]);
					return;
				}
			} else if (gestureState.moveY > 446 && gestureState.moveY < 506) {
				if (id === 'Dime') {
					setSorted({
						...sorted,
						Dime: true,
					});
					playSound('correct');
					alert('Dime sorted successful');
					setSeleted([...selected, id]);
					return;
				}
			}
			setSeleted([...selected, id]);
			playSound('incorrect');
			alert('Wrong Box!!! Move to the right box!!!');
		} else {
			setSorted({
				...sorted,
				[id]: false,
			});

			console.log('Outside the drop box');

			// removing from the selected list

			setSeleted(selected.filter((item) => item !== id));
			// setSeleted([...selected, id]);
		}
	};
	return (
		<View>
			<View style={{ flexDirection: 'row-reverse' }}>
				<View style={styles.dropZone}>
					{options.map((op, index) => (
						<View
							key={index}
							style={{
								marginLeft: '40%',
								marginVertical: 5,
							}}
						>
							<Image
								source={require('../../../assets/images/piggy.png')}
								style={{
									width: phoneWidth ? 50 : 80,
									height: phoneWidth ? 50 : 80,
								}}
							/>
							<Text>{op.name?.toUpperCase()}</Text>
						</View>
					))}
				</View>

				<View style={styles.column}>
					{options.map((op, index) => (
						<Draggable
							key={op.name}
							imageSource={op.image}
							renderSize={phoneWidth ? 50 : 80}
							x={20}
							y={10 + index * 75}
							onDragRelease={(event, gestureState, bounds) =>
								checkDrop(event, gestureState, bounds, op.coin)
							}
							onLongPress={() => console.log('long press')}
							onShortPressRelease={() => console.log('press drag')}
							onPressIn={() => console.log('in press')}
							onPressOut={() => console.log('out press')}
						/>
					))}
				</View>
			</View>
			{sorted.Dime && sorted.Nickel && sorted.Penny && sorted.Quarter && (
				<View style={{ justifyContent: 'center', marginHorizontal: 'auto' }}>
					<CustomButton
						buttonText="Congratulations, You've pass this challenge!!!"
						safe
					/>
				</View>
			)}
		</View>
	);
};
export default MatchCoin;
const styles = StyleSheet.create({
	column: {
		width: '50%',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		height: '50%',
	},
	dropZone: {
		height: '100%',
		width: '50%',
	},
	text: {
		marginTop: 25,
		marginLeft: 5,
		marginRight: 5,
		textAlign: 'center',
		color: '#fff',
		fontSize: 25,
		fontWeight: 'bold',
	},
	bodytext: {
		color: '#000',
		margin: 10,
	},
	ballContainer: {
		height: 200,
	},
});

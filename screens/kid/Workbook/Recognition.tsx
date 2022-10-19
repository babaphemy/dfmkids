import { StyleSheet, Dimensions, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Draggable from 'react-native-draggable';
import { SOUND } from '../Sound';
import { Audio } from 'expo-av';
import { sizeHeight, sizeWidth } from '../../../utils/size';

import penny from '../../../assets/images/penny.png';
import quarter from '../../../assets/images/quarter.png';
import nickel from '../../../assets/images/nickel.png';
import dime from '../../../assets/images/dime.png';
import { TextB, TextR } from '../../../components/base-ui/TextAtm';

const options = [
	{ image: penny, name: 'Penny', value: 1 },
	{ image: quarter, name: 'Quarter', value: 2 },
	{ image: dime, name: 'Dime', value: 4 },
	{ image: quarter, name: 'Quarter', value: 3 },
];

const secondOptions = [
	{ image: quarter, name: 'Quarter', value: 5 },
	{ image: dime, name: 'Dime', value: 7 },
	{ image: nickel, name: 'Nickel', value: 6 },
	{ image: dime, name: 'Dime', value: 8 },
];
const Recognition = () => {
	const [selected, setSeleted] = useState([]);
	const [selectedCoin, setSelectedCoin] = useState('dime');
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

	useEffect(() => {
		let chosenValue = Math.random() < 0.5 ? 'dime' : 'quarter';
		setSelectedCoin(chosenValue);
	}, []);

	const checkDrop = (event, gestureState, bounds, item) => {
		if (gestureState.moveY > 398 && gestureState.moveY < 505) {
			if (selected.find((i) => i.value === item.value) === undefined) {
				setSeleted([...selected, item]);
			}
		} else {
			setSeleted(selected.filter((i) => i.value !== item.value));
		}
	};

	useEffect(() => {
		console.log(
			selected.every((ele) => ele.name.toLowerCase() === selectedCoin)
		);
		if (selected.length > 2) {
			if (selected.every((ele) => ele.name.toLowerCase() == selectedCoin)) {
				alert('Congratulations, You are correct!!!');
				playSound('correct');
				return;
			}

			alert('Good try, but you are not correct!!!');
			playSound('incorrect');
		}
	}, [selected]);

	return (
		<View>
			<View style={styles.center}>
				{selectedCoin === 'dime' ? (
					<Image
						source={require('../../../assets/images/complete-dime.png')}
						style={styles.Img}
					/>
				) : (
					<Image
						source={require('../../../assets/images/complete-quarter.jpg')}
						style={styles.Img}
					/>
				)}
			</View>

			<View style={styles.dropZone}>
				<TextB size={responsiveFontSize(2.5)} color="#fff" center>
					Drop all {selectedCoin} coin here.
				</TextB>
			</View>
			<View style={styles.row}>
				{options.map((op, index) => (
					<Draggable
						key={index}
						imageSource={op.image}
						renderSize={phoneWidth ? 50 : 80}
						x={30 + index * 75}
						y={30}
						onDragRelease={(event, gestureState, bounds) =>
							checkDrop(event, gestureState, bounds, op)
						}
						onLongPress={() => console.log('long press')}
						onShortPressRelease={() => console.log('press drag')}
						onPressIn={() => console.log('in press')}
						onPressOut={() => console.log('out press')}
					/>
				))}
			</View>
			<View style={styles.row}>
				{secondOptions.map((op, index) => (
					<Draggable
						key={index}
						imageSource={op.image}
						renderSize={phoneWidth ? 50 : 80}
						x={30 + index * 75}
						y={30}
						onDragRelease={(event, gestureState, bounds) =>
							checkDrop(event, gestureState, bounds, op)
						}
						onLongPress={() => console.log('long press')}
						onShortPressRelease={() => console.log('press drag')}
						onPressIn={() => console.log('in press')}
						onPressOut={() => console.log('out press')}
					/>
				))}
			</View>
		</View>
	);
};

export default Recognition;

const styles = StyleSheet.create({
	Img: {
		resizeMode: 'contain',
		width: sizeWidth(50),
		height: sizeHeight(15),
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: 100,
	},
	dropZone: {
		height: 150,
		backgroundColor: '#ff1f1f',
		textAlign: 'center',
	},
	center: {
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

import React, { useState, useEffect } from 'react';
import { sizeHeight, sizeWidth } from '../../../utils/size';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import { TextB, TextR } from '../../../components/base-ui/TextAtm';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Draggable from 'react-native-draggable';
import { SOUND } from '../Sound';
import { Audio } from 'expo-av';

import penny from '../../../assets/images/penny.png';
import quarter from '../../../assets/images/quarter.png';
import nickel from '../../../assets/images/nickel.png';
import dime from '../../../assets/images/dime.png';

const options = [
	{ image: penny, name: 'Penny', value: 1 },
	{ image: quarter, name: 'Quarter', value: 25 },
	{ image: nickel, name: 'Nickel', value: 5 },
	{ image: dime, name: 'Dime', value: 10 },
];
const Shopping = () => {
	const [selected, setSeleted] = useState([]);
	const [total, setTotal] = useState(0);
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

	const checkDrop = (event, gestureState, bounds, item) => {
		if (gestureState.moveY > 398 && gestureState.moveY < 505) {
			if (selected.find((i) => i.name === item.name) === undefined) {
				setSeleted([...selected, item]);
			}
		} else {
			setSeleted(selected.filter((i) => i.name !== item.name));
		}
	};

	useEffect(() => {
		let calc = 0;
		selected.map((item) => {
			calc += item.value;
		});

		if (calc === 0) {
			setTotal(0);
		} else if (calc === 26) {
			alert('Congratulations, You are correct!!!');
			playSound('correct');
		} else if (calc > 26) {
			alert('Good try, but you are not correct!!!');
			playSound('incorrect');
		}
		setTotal(calc);
	}, [selected]);

	return (
		<View>
			<View style={styles.row}>
				<Image
					source={require('../../../assets/images/bunny.png')}
					style={styles.Img}
				/>
				<View>
					<TextR size={responsiveFontSize(2.5)}>Price:</TextR>
					<TextB size={responsiveFontSize(2.5)}>26c</TextB>
				</View>
			</View>

			<View style={styles.dropZone}>
				<TextB size={responsiveFontSize(2.5)} color="#fff" center>
					Drop the correct coins here
				</TextB>
				<TextB size={responsiveFontSize(2.5)} color="#fff" center>
					Total Drag Coins: {total}c
				</TextB>
			</View>

			<View style={styles.row}>
				{options.map((op, index) => (
					<Draggable
						key={op.name}
						imageSource={op.image}
						renderSize={phoneWidth ? 50 : 80}
						x={30 + index * 75}
						y={50}
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

export default Shopping;
let styles = StyleSheet.create({
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
});

import React, { useState, useEffect } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Draggable from 'react-native-draggable';
import CustomButton from '../../../components/buttonc';
import { SOUND } from '../Sound';
import { Audio } from 'expo-av';

import penny from '../../../assets/images/penny.png';
import quarter from '../../../assets/images/quarter.png';
import nickel from '../../../assets/images/nickel.png';
import dime from '../../../assets/images/dime.png';

const options = [
	{ image: penny, name: 'Penny' },
	{ image: quarter, name: 'Quarter' },
	{ image: nickel, name: 'Nickel' },
	{ image: dime, name: 'Dime' },
];

// user can drag and drop coin into correct view to sort the coins
// notify if coin dragged is correct or wrong
// play bg music on loop
const Coinsorting = () => {
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
		if (gestureState.moveY < 355 && gestureState.moveY > 215) {
			if (gestureState.moveX > 12 && gestureState.moveX < 75) {
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
			} else if (gestureState.moveX > 121 && gestureState.moveX < 187) {
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
			} else if (gestureState.moveX > 214 && gestureState.moveX < 290) {
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
			} else if (gestureState.moveX > 307 && gestureState.moveX < 358) {
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
		}
	};

	return (
		<View>
			{sorted.Dime && sorted.Nickel && sorted.Penny && sorted.Quarter && (
				<View style={{ justifyContent: 'center', marginHorizontal: 'auto' }}>
					<CustomButton
						buttonText="Congratulations, All Coins sorted correctly"
						safe
					/>
				</View>
			)}
			<View style={styles.dropZone}>
				<View
					style={{
						flex: 1,
						width: '100%',
						justifyContent: 'center',
					}}
				>
					<Table borderStyle={{ borderWidth: 1 }}>
						<Row
							data={['Quarter(25c)', 'Dime(10c)', 'Penny(1c)', 'Nickel(5c)']}
							style={{ height: 40, backgroundColor: '#fff' }}
							textStyle={{ fontFamily: 'Atma-Medium', textAlign: 'center' }}
						/>
						<Row
							data={['Quarter', 'Dime', 'Penny', 'Nickel']}
							style={{ height: 70 }}
							textStyle={{ fontFamily: 'Atma-Medium', color: 'transparent' }}
						/>
					</Table>
				</View>
			</View>

			<View style={styles.row}>
				{options.map((op, index) => (
					<Draggable
						key={op.name}
						imageSource={op.image}
						renderSize={phoneWidth ? 50 : 80}
						x={30 + index * 75}
						y={75}
						onDragRelease={(event, gestureState, bounds) =>
							checkDrop(event, gestureState, bounds, op.name)
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

export default Coinsorting;
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 200,
	},
	dropZone: {
		height: 150,
	},
});

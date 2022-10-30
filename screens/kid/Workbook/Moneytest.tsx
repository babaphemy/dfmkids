import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SOUND } from '../Sound';
import { Audio } from 'expo-av';
import Draggable from 'react-native-draggable';
import penny from '../../../assets/images/penny.png';
import quarter from '../../../assets/images/quarter.png';
import nickel from '../../../assets/images/nickel.png';
import dime from '../../../assets/images/dime.png';
import CustomButton from '../../../components/buttonc';
import {
	responsiveFontSize,
	responsiveHeight,
	responsiveWidth,
} from 'react-native-responsive-dimensions';
import { TextB } from '../../../components/base-ui/TextAtm';

const options = [
	{ image: penny, name: 'Penny' },
	{ image: quarter, name: 'Quarter' },
	{ image: nickel, name: 'Nickel' },
	{ image: dime, name: 'Dime' },
];
const { width, height } = Dimensions.get('window');

const Moneytest = ({ done }: any) => {
	const [selected, setSeleted] = useState<Object[]>([]);
	const [reverse, setReverse] = useState<boolean>(true);

	//let reverse: boolean | null = null;
	// const doReverse = useMemo(() => (reverse = !reverse), [reverse]);
	const [sorted, setSorted] = useState({
		Nickel: false,
		Quarter: false,
		Penny: false,
		Dime: false,
	});
	// const width = Dimensions.get("window").width;
	//const phoneWidth = width < 500 ? true : false;
	const [sound, setSound] = useState<any>();

	async function playSound(type: string) {
		const it = SOUND.find((x) => x.action === type);
		const { sound } = await Audio.Sound.createAsync(it?.sound);
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
		if (
			gestureState.moveX > responsiveWidth(69) &&
			gestureState.moveX < responsiveWidth(89)
		) {
			// adding to the selected list
			if (
				gestureState.moveY > responsiveHeight(15) &&
				gestureState.moveY < responsiveHeight(29)
			) {
				if (id === 'Penny') {
					setSorted({
						...sorted,
						Penny: true,
					});
					playSound('penny');
					alert('Awesome, You found a penny!');
					setSeleted([...selected, id]);
					return;
				}
			} else if (gestureState.moveY > height * 0.3) {
				if (id === 'Nickel') {
					setSorted({
						...sorted,
						Nickel: true,
					});
					playSound('nickel');
					alert('Nice, You found a Nickel');
					setReverse(false);
					setSeleted([...selected, id]);
					return;
				}
			}
			if (gestureState.moveY > height * 0.5) {
				if (id === 'Dime') {
					setSorted({
						...sorted,
						Dime: true,
					});
					playSound('dime');
					alert('Awesome, you found Dime!');
					setSeleted([...selected, id]);
					return;
				}
			}
			if (gestureState.moveY > height * 0.6) {
				if (id === 'Quarter') {
					setSorted({
						...sorted,
						Quarter: true,
					});
					playSound('quarter');
					alert("Awesome, you've found a quarter");
					setSeleted([...selected, id]);
					return;
				}
			}
			setSeleted([...selected, id]);
			setReverse(true);
			playSound('buzz');
			alert('Wrong Spot!!! Try again!!!');
		} else {
			setSorted({
				...sorted,
				[id]: false,
			});

			// removing from the selected list

			setSeleted(selected.filter((item) => item !== id));
			// setSeleted([...selected, id]);
		}
	};

	const boxHeight = height * 0.65;
	return (
		<View style={{ height: boxHeight }}>
			{/* <TextB>{selected?.length}/4</TextB> */}
			<View
				style={{
					display: 'flex',
					flexDirection: 'row-reverse',
					justifyContent: 'space-between',
				}}
			>
				<View style={styles.dropC}>
					<View style={styles.item}>
						<TextB size={responsiveFontSize(1)} color="#fff" center>
							Penny
						</TextB>
					</View>
					<View style={[{ ...styles.item, backgroundColor: 'blue' }]}>
						<TextB size={responsiveFontSize(1)} color="#fff" center>
							Nickel
						</TextB>
					</View>
					<View style={[{ ...styles.item, backgroundColor: 'red' }]}>
						<TextB size={responsiveFontSize(1)} center>
							Dime
						</TextB>
					</View>
					<View style={[{ ...styles.item, backgroundColor: 'green' }]}>
						<TextB size={responsiveFontSize(1)} color="#fff" center>
							Quarter
						</TextB>
					</View>
				</View>
				<View style={styles.column}>
					{options.map((op, index) => (
						<View key={op.name} style={styles.drag}>
							<Draggable
								imageSource={op.image}
								renderSize={responsiveWidth(13)}
								x={20}
								y={10 + index * 75}
								onDragRelease={(event, gestureState, bounds) =>
									checkDrop(event, gestureState, bounds, op.name)
								}
								onLongPress={() => console.log('long press')}
								onShortPressRelease={() => console.log('press drag')}
								onPressIn={() => console.log('in press')}
								onPressOut={() => console.log('out press')}
								//shouldReverse={reverse}
							/>
						</View>
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

export default Moneytest;
const styles = StyleSheet.create({
	column: {
		width: '45%',
	},
	dropZone: {
		height: '100%',
		width: '50%',
	},
	item: {
		backgroundColor: '#f1425d',
		padding: height > 1200 ? 50 : 30,
		margin: height > 1200 ? 30 : 15,
		color: '#fff',
	},
	drag: {
		marginBottom: height > 1200 ? 120 : 20,
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
	dropC: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'white',
		justifyContent: 'center',
		width: '50%',
	},
});

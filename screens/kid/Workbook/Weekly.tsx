import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { sizeHeight, sizeWidth } from '../../../utils/size';
import Draggable from 'react-native-draggable';

import penny from '../../../assets/images/penny.png';
import quarter from '../../../assets/images/quarter.png';
import nickel from '../../../assets/images/nickel.png';
import dime from '../../../assets/images/dime.png';
import { TextB, TextR } from '../../../components/base-ui/TextAtm';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const options = [
	{ image: penny, name: 'Penny', value: 1 },
	{ image: quarter, name: 'Quarter', value: 25 },
	{ image: nickel, name: 'Nickel', value: 5 },
	{ image: dime, name: 'Dime', value: 10 },
];
const secondOptions = [
	{ image: penny, name: 'Penny2', value: 1 },
	{ image: quarter, name: 'Quarter2', value: 25 },
	{ image: nickel, name: 'Nickel2', value: 5 },
	{ image: dime, name: 'Dime2', value: 10 },
];
const Weekly = () => {
	const [selected, setSeleted] = useState([]);
	const [total, setTotal] = useState(0);
	const width = Dimensions.get('window').width;
	const phoneWidth = width < 500 ? true : false;

	const checkDrop = (event, gestureState, bounds, item) => {
		console.log('Y from top screen : ', gestureState.moveY);
		if (gestureState.moveY > 230 && gestureState.moveY < 435) {
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
		}
		setTotal(calc);
	}, [selected]);
	return (
		<View>
			<View style={styles.dropZone}>
				<Image
					source={require('../../../assets/images/piggy.png')}
					style={styles.Img}
				/>
			</View>
			<View>
				<TextR size={responsiveFontSize(2.5)}>
					You have saved: <TextB size={responsiveFontSize(2.5)}>{total}c</TextB>
				</TextR>
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
			<View style={styles.row}>
				{secondOptions.map((op, index) => (
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

export default Weekly;
let styles = StyleSheet.create({
	Img: {
		resizeMode: 'center',
		width: sizeWidth(50),
		height: sizeHeight(30),
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: 100,
	},
	dropZone: {
		height: 200,
		borderWidth: 1,
		borderColor: '#f3ba1d',
		borderRadius: 6,
		backgroundColor: '#fff',
		marginHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

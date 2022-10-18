import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Draggable from 'react-native-draggable';
import penny from '../../../assets/images/penny.png';
const Match3 = () => {
	const [selected, setSeleted] = useState([]);
	const width = Dimensions.get('window').width;
	const phoneWidth = width < 500 ? true : false;

	const checkDrop = (event, gestureState, bounds, id) => {
		console.log(
			'droped image id: ',
			id,
			'Y from top screen : ',
			gestureState.moveY
		);
		if (gestureState.moveY < 387) {
			// adding to the selected list
			console.log('inside the drop box');
			setSeleted([...selected, id]);
		} else {
			console.log('Outside the drop box');

			// removing from the selected list

			setSeleted(selected.filter((item) => item !== id));
		}
	};
	return (
		<View style={styles.mainContainer}>
			<View style={styles.dropZone}>
				<Text style={styles.text}>Drop the dime here!({selected?.length})</Text>
				{selected.map((s, idx) => (
					<Text style={styles.bodytext} key={idx}>
						ID: {s}
					</Text>
				))}
			</View>
			<View style={styles.row}>
				<Draggable
					imageSource={penny}
					renderSize={phoneWidth ? 50 : 80}
					x={200}
					y={300}
					onDragRelease={(event, gestureState, bounds) =>
						checkDrop(event, gestureState, bounds, 1)
					}
					onLongPress={() => console.log('long press')}
					onShortPressRelease={() => console.log('press drag')}
					onPressIn={() => console.log('in press')}
					onPressOut={() => console.log('out press')}
				/>
				<Draggable
					imageSource={require('../../../assets/images/dime.png')}
					renderSize={phoneWidth ? 50 : 80}
					x={300}
					y={300}
					onDragRelease={(event, gestureState, bounds) =>
						checkDrop(event, gestureState, bounds, 2)
					}
					onLongPress={() => console.log('long press')}
					onShortPressRelease={() => console.log('press drag')}
					onPressIn={() => console.log('in press')}
					onPressOut={() => console.log('out press')}
				/>
				<Draggable
					imageSource={require('../../../assets/images/quarter.png')}
					renderSize={phoneWidth ? 50 : 80}
					x={100}
					y={300}
					onDragRelease={(event, gestureState, bounds) =>
						checkDrop(event, gestureState, bounds, 3)
					}
					onLongPress={() => console.log('long press')}
					onShortPressRelease={() => console.log('press drag')}
					onPressIn={() => console.log('in press')}
					onPressOut={() => console.log('out press')}
				/>
				<Draggable
					imageSource={require('../../../assets/images/nickel.png')}
					renderSize={phoneWidth ? 50 : 80}
					x={10}
					y={300}
					onDragRelease={(event, gestureState, bounds) =>
						checkDrop(event, gestureState, bounds, 4)
					}
					onLongPress={() => console.log('long press')}
					onShortPressRelease={() => console.log('press drag')}
					onPressIn={() => console.log('in press')}
					onPressOut={() => console.log('out press')}
				/>
				<Draggable
					imageSource={require('../../../assets/images/penny.png')}
					renderSize={phoneWidth ? 50 : 80}
					x={200}
					y={300}
					onDragRelease={(event, gestureState, bounds) =>
						checkDrop(event, gestureState, bounds, 5)
					}
					onLongPress={() => console.log('long press')}
					onShortPressRelease={() => console.log('press drag')}
					onPressIn={() => console.log('in press')}
					onPressOut={() => console.log('out press')}
				/>
			</View>
		</View>
	);
};

export default Match3;
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		height: '50%',
	},
	dropZone: {
		height: 150,
		backgroundColor: '#00334d',
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
		color: '#fff',
		margin: 10,
	},
	ballContainer: {
		height: 200,
	},
});

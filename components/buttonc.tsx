import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CustomButton(props: any) {
	return (
		<TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
			<View
				style={{
					backgroundColor: props.safe ? '#20c436' : '#ff1f1f',
					paddingVertical: 10,
					borderRadius: 5,
					marginTop: 8,
				}}
			>
				<Text style={styles._buttonText}>{props.buttonText}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	_buttonText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 20,
		fontWeight: '600',
	},
});

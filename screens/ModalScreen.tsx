import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ModalScreen() {
	const navigation = useNavigation();
	const goto = () => {
		navigation.navigate('Root');
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title} onPress={goto}>
				Notifications
			</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Pressable onPress={goto}>
				<Text>Close</Text>
			</Pressable>
			{/* <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});

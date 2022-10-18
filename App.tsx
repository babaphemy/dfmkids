import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
	let [fontsLoaded] = useFonts({
		'Atma-Bold': require('./assets/fonts/Atma-Bold.ttf'),
		'Atma-Light': require('./assets/fonts/Atma-Light.ttf'),
		'Atma-Medium': require('./assets/fonts/Atma-Medium.ttf'),
		'Atma-Regular': require('./assets/fonts/Atma-Regular.ttf'),
		'Atma-SemiBold': require('./assets/fonts/Atma-SemiBold.ttf'),
	});
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete || !fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />

				<StatusBar />
			</SafeAreaProvider>
		);
	}
}

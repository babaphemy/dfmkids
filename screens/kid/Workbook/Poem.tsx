import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { TextB, TextR } from '../../../components/base-ui/TextAtm';
import { kidData } from '../../../utils/data';

const Poem = () => {
	const { poem }: any = kidData.find((x) => x.page === 10);

	return (
		<View>
			{poem.map((pm, index) => {
				return (
					<View key={index} style={styles.center}>
						<TextB size={responsiveFontSize(3)} mb={3}>
							Verse {index + 1}
						</TextB>
						{pm.text.map((line, index) => (
							<TextR key={index} size={responsiveFontSize(2.5)}>
								{line}
							</TextR>
						))}
					</View>
				);
			})}
		</View>
	);
};

export default Poem;
let styles = StyleSheet.create({
	center: {
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
	},
});

import React, { useState } from 'react';
import { Image, Text, TextInput, View, Dimensions } from 'react-native';
import { TextR } from '../../../components/base-ui/TextAtm';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

interface Props {
	title?: string;
	ex: { question: string; options: [number] };
}
const Dime: React.FC<Props> = (props: Props) => {
	const { ex } = props;
	const [number, setNumber] = useState(
		Array(ex.options.map((item) => item).length).fill(0)
	);
	const width = Dimensions.get('window').width;
	const phoneWidth = width < 500 ? true : false;

	return (
		<View style={styles.exercise}>
			<View style={styles.center}>
				<Image
					source={require('../../../assets/images/complete-dime.png')}
					style={styles.dimeImg}
				/>
			</View>
			<View style={[styles.qtn, styles.center]}>
				<TextR style={styles.qtnText}>{ex.question}</TextR>
			</View>

			<View style={styles.set}>
				{ex.options.map((a, idx) => (
					<View
						style={phoneWidth ? styles.innerSetMobile : styles.innerSet}
						key={idx}
					>
						<View style={styles.coin}>
							{Array(a)
								.fill(0)
								.map((_, index) => (
									<Image
										key={index}
										source={require('../../../assets/images/dime.png')}
										style={styles.img}
									/>
								))}
						</View>
						<View style={styles.frow}>
							<TextInput
								style={phoneWidth ? styles.inputMobile : styles.input}
								value={number[idx]}
								onChangeText={(text) => {
									let arr = [...number];
									arr[idx] = parseInt(text);
									setNumber(arr);
								}}
								placeholder="enter value in cents"
								keyboardType="numeric"
							/>

							<View>
								{number[idx] === a * 10 ? (
									<MaterialIcons name="check" color="#0ff741" size={30} />
								) : (
									<Text>Cents</Text>
								)}
							</View>
						</View>
					</View>
				))}
			</View>
		</View>
	);
};
export default Dime;

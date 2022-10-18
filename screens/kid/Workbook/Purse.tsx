import React, { useState } from 'react';
import {
	Image,
	Text,
	TextInput,
	View,
	Dimensions,
	ImageBackground,
} from 'react-native';
import { TextR } from '../../../components/base-ui/TextAtm';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { sizeHeight, sizeWidth } from '../../../utils/size';

interface Props {
	title?: string;
	ex: { question: string; options: [number] };
}
const Purse: React.FC<Props> = (props: Props) => {
	const { ex } = props;
	const [number, setNumber] = useState(
		Array(ex.options.map((item) => item).length).fill(0)
	);
	const width = Dimensions.get('window').width;
	const phoneWidth = width < 500 ? true : false;

	return (
		<View style={styles.exercise}>
			<View style={[styles.qtn, styles.center]}>
				<TextR style={styles.qtnText}>{ex.question}</TextR>
			</View>

			<View style={styles.set}>
				{ex.options.map((a, idx) => (
					<View
						style={phoneWidth ? styles.innerSetMobile : styles.innerSet}
						key={idx}
					>
						<View>
							<ImageBackground
								source={require(`../../../assets/images/purse2.png`)}
								resizeMode="cover"
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'flex-end',
									paddingBottom: 5,
									height: sizeHeight(12),
									marginVertical: 20,
									width: sizeWidth(30),
								}}
							>
								{a.coins.map((image, index) => {
									if (image === 'dime') {
										return (
											<Image
												key={index}
												source={require(`../../../assets/images/dime.png`)}
												style={styles.img}
											/>
										);
									} else if (image === 'quarter') {
										return (
											<Image
												key={index}
												source={require(`../../../assets/images/quarter.png`)}
												style={styles.img}
											/>
										);
									} else if (image === 'nickel') {
										return (
											<Image
												key={index}
												source={require(`../../../assets/images/nickel.png`)}
												style={styles.img}
											/>
										);
									} else if (image === 'penny') {
										return (
											<Image
												key={index}
												source={require(`../../../assets/images/penny.png`)}
												style={styles.img}
											/>
										);
									}
								})}
							</ImageBackground>
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
								{number[idx] === a.value ? (
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
export default Purse;

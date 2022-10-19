import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {
	useContext,
	useEffect,
	useState,
	useRef,
	useCallback,
} from 'react';
import { Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ContainerSafeView } from '../../../components/base-ui/Container';
import { HeaderAppWithHome } from '../../../components/base-ui/HeaderApp';
import Page from '../../../components/base-ui/Page';
import { TextB } from '../../../components/base-ui/TextAtm';
import CustomButton from '../../../components/buttonc';
import { View } from '../../../components/Themed';
import { Animated } from 'react-native';
import { sizeHeight, sizeWidth } from '../../../utils/size';

const Workbook = () => {
	const anim = useRef(new Animated.Value(0));
	const [curr, setCurr] = useState(0);
	const [quiz, setQuiz] = useState<any>({
		id: 13,
		page: 13,
		title: 'Coin Worksheet',
		image: '',
		exercise: [
			{
				id: 1,
				question:
					'A quarter is ___ cents. It takes ____ quarters to make $1.00',
				answer: [25, 4],
				options: [
					{
						text: '25 and 4',
						value: [25, 4],
					},
					{
						text: '25 and 5',

						value: [25, 5],
					},
					{
						text: '50 and 4',
						value: [50, 4],
					},
					{
						text: '50 and 5',
						value: [50, 5],
					},
				],
				image: '',
			},
			{
				id: 2,
				question: 'A dime is ___ cents. It takes ____ dimes to make $1.00',
				answer: [10, 10],
				options: [
					{
						text: '10 and 10',
						value: [10, 10],
					},
					{
						text: '10 and 11',
						value: [10, 11],
					},
					{
						text: '20 and 10',
						value: [20, 10],
					},
					{
						text: '20 and 11',
						value: [20, 11],
					},
				],
				image: '',
			},
			{
				id: 1,
				question: 'A nickel is ___ cents. It takes ____ nickels to make $1.00',
				answer: [5, 20],
				image: '',
			},
			{
				id: 1,
				question: 'A penny is ___ cents. It takes ____ pennies to make $1.00',
				answer: [1, 100],
				image: '',
			},
		],
	});
	const [selectedOption, setSelectedOption] = useState('');
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [textarea, setTextarea] = useState<string>('');

	const shake = useCallback(() => {
		return Animated.loop(
			Animated.sequence([
				Animated.timing(anim.current, {
					toValue: -3,
					duration: 60,
					useNativeDriver: false,
				}),
				Animated.timing(anim.current, {
					toValue: 3,
					duration: 60,
					useNativeDriver: false,
				}),
				Animated.timing(anim.current, {
					toValue: 0,
					duration: 60,
					useNativeDriver: false,
				}),
			]),
			{ iterations: 2 }
		).start();
	}, []);
	const press = (a?: string, i?: number) => {
		if (typeof i === 'number') {
			setSelectedIndex(i);
		}

		if (a && a?.value != quiz.exercise[0].answer) {
			setSelectedOption('#f83e26');
			shake();
			setTimeout(() => {
				setSelectedOption('');
				setSelectedIndex(null);
			}, 500);
		} else {
			setSelectedOption('#26f842');
			setTimeout(() => {
				setSelectedOption('');
				setCurr((c) => c + 1);
				setSelectedIndex(null);
			}, 500);
		}
	};

	const question = quiz.exercise[0];

	return (
		<Page>
			<ContainerSafeView>
				<HeaderAppWithHome title="Workbook" />
				{question ? (
					<View>
						<TextB size={responsiveFontSize(3)} ml={48} color="#595959">
							{quiz?.title}
						</TextB>

						<TextB size={responsiveFontSize(1.7)} ml={48} color="#595959">
							{question?.question}
						</TextB>
						<View>
							{question?.options?.length ? (
								question?.options.map((x: string, i: number) => (
									<Pressable key={i} onPress={() => press(x, i)}>
										<View>
											<Animated.View
												style={[
													styles.items,
													{
														backgroundColor:
															selectedIndex === i ? selectedOption : '#9c9b9b',
														transform:
															selectedIndex === i
																? [
																		{
																			translateX: anim.current,
																		},
																  ]
																: [
																		{
																			translateX: 0,
																		},
																  ],
													},
												]}
											>
												<TextB size={responsiveFontSize(2)} color={'#fff'}>
													{x.text}
												</TextB>
												{selectedOption === '#f83e26' ? (
													selectedIndex === i ? (
														<MaterialIcons
															name="close"
															size={24}
															color="#fff"
														/>
													) : (
														<MaterialIcons
															name="radio-button-unchecked"
															color="#fff"
															size={30}
														/>
													)
												) : selectedOption === '#26f842' ? (
													selectedIndex === i ? (
														<MaterialIcons
															name="check"
															color="#fff"
															size={30}
														/>
													) : (
														<MaterialIcons
															name="radio-button-unchecked"
															color="#fff"
															size={30}
														/>
													)
												) : (
													<MaterialIcons
														name="radio-button-unchecked"
														color="#fff"
														size={30}
													/>
												)}
											</Animated.View>
										</View>
									</Pressable>
								))
							) : (
								<View>
									<TextInput
										multiline
										editable
										maxLength={40}
										numberOfLines={7}
										style={styles.input}
										placeholder="Type your answer here"
										value={textarea}
										onChangeText={setTextarea}
									/>

									<CustomButton buttonText="Next" onPress={() => press()} />
								</View>
							)}
						</View>
					</View>
				) : (
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<CustomButton
							buttonText="Next Chapter"
							onPress={() => console.log('Open next chapter')}
						/>
					</View>
				)}
			</ContainerSafeView>
		</Page>
	);
};

export default Workbook;
const styles = StyleSheet.create({
	buttonRowContainer: {
		marginBottom: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
	items: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#3f3f3f',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},

	nextBtn: {
		marginTop: 'auto',
	},
	input: {
		borderWidth: 1,
		fontSize: 14,
		padding: 8,
		borderRadius: 4,
		borderColor: '#D9D9D8',
		flexDirection: 'row',
		marginHorizontal: 10,
		marginVertical: 20,
		textAlignVertical: 'top',
	},
});

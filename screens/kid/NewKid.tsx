import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Alert, View } from 'react-native';
import { kidData } from '../../utils/data';
import Page from '../../components/base-ui/Page';
import { ContainerSafeView } from '../../components/base-ui/Container';
import { HeaderAppWithHome } from '../../components/base-ui/HeaderApp';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { TextB, TextR } from '../../components/base-ui/TextAtm';
import Dime from './Workbook/Dime';
import Quarter from './Workbook/Quarter';
import Moneymatch from './Workbook/Moneymatch';
import Shopping from './Workbook/Shopping';
import Weekly from './Workbook/Weekly';
import Coinsorting from './Workbook/Coinsorting';
import Poem from './Workbook/Poem';
import styled from 'styled-components/native';
import Moneytest from './Workbook/Moneytest';
import MatchCoin from './Workbook/MatchCoin';
import SvgArrowLeft from '../../assets/svgs/SvgArrowLeft';
import SvgArrowRight from '../../assets/svgs/SvgArrowRight';
import Purse from './Workbook/Purse';
import Recognition from './Workbook/Recognition';
import Lemonade from './Workbook/Lemonade';
import ContainerImage from '../../components/base-ui/ContainerImage';
import { Ionicons } from '@expo/vector-icons';
interface Props {}

const Newkid = (props: Props) => {
	const [pg, setPg] = useState<number>(props?.route?.params?.page || 1);
	const item = kidData.find((x) => x.page === pg);

	return (
		<Page>
			<ContainerImage source={require('../../assets/images/workbg.jpg')} />
			<ContainerSafeView>
				<HeaderAppWithHome title={item?.title || 'NA'} />
				{pg === 1 || pg === 4 || pg === 10 || pg === 11 || pg === 12 ? (
					<ScrollView contentContainerStyle={styles.cont}>
						<View>
							<TextB
								size={responsiveFontSize(2)}
								mb={24}
								color={'#595959'}
								center
							>
								{item?.title}
							</TextB>
							<TextR
								size={responsiveFontSize(2.5)}
								color={'#595959'}
								mr={18}
								ml={18}
								center
							>
								{item?.text}
							</TextR>
							{item?.exercise?.map((ex, index) => {
								switch (item.page) {
									case 1:
										return <Dime key={index} ex={ex} />;

									case 2:
										return <Moneytest key={index} ex={ex} />;

									case 3:
										return <MatchCoin key={index} ex={ex} />;
									case 4:
										return <Quarter key={index} ex={ex} />;
									case 5:
										return <Moneymatch key={index} />;
									case 6:
										return <Shopping key={index} />;
									case 7:
										return <Weekly key={index} />;
									case 8:
										return <Recognition key={index} />;
									case 9:
										return <Coinsorting key={index} />;
									case 10:
										return <Poem key={index} ex={ex} />;
									case 11:
										return <Lemonade key={index} ex={ex} />;

									case 12:
										return <Purse key={index} ex={ex} />;
									default:
										break;
								}
							})}
						</View>
					</ScrollView>
				) : (
					<View style={styles.cont}>
						<TextB
							size={responsiveFontSize(2)}
							mb={24}
							color={'#595959'}
							center
						>
							{item?.title}
						</TextB>
						<TextR
							size={responsiveFontSize(2.5)}
							color={'#595959'}
							mr={18}
							ml={18}
							center
						>
							{item?.text}
						</TextR>
						{item?.exercise?.map((ex, index) => {
							switch (item.page) {
								case 1:
									return <Dime key={index} ex={ex} />;

								case 2:
									return <Moneytest key={index} ex={ex} />;

								case 3:
									return <MatchCoin key={index} ex={ex} />;
								case 4:
									return <Quarter key={index} ex={ex} />;
								case 5:
									return <Moneymatch key={index} />;
								case 6:
									return <Shopping key={index} />;
								case 7:
									return <Weekly key={index} />;
								case 8:
									return <Recognition key={index} />;
								case 9:
									return <Coinsorting key={index} />;
								case 10:
									return <Poem key={index} ex={ex} />;
								case 11:
									return <Lemonade key={index} ex={ex} />;
								case 12:
									return <Purse key={index} ex={ex} />;
								default:
									break;
							}
						})}
					</View>
				)}
				<View style={styles.frow}>
					{pg > 1 && (
						<Button onPress={() => setPg((p) => p - 1)}>
							<SvgArrowLeft />
						</Button>
					)}
					<Button
						onPress={() => {
							if (pg === 12) {
								props.navigation.navigate('Age');
								return;
							}

							setPg((p) => p + 1);
						}}
					>
						<SvgArrowRight />
					</Button>
				</View>
			</ContainerSafeView>
		</Page>
	);
};
export default Newkid;
const styles = StyleSheet.create({
	cont: {
		flexGrow: 1,
	},
	frow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		bottom: 0,
	},
});

const Button = styled.TouchableOpacity`
	box-shadow: 0 4px 7px rgba(105, 105, 105, 0.22);
`;

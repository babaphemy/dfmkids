import React from 'react';
import {
	responsiveFontSize,
	responsiveHeight,
} from 'react-native-responsive-dimensions';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import SvgLetGo from '../../assets/svgs/SvgLetgo';
import ContainerImage from '../../components/base-ui/ContainerImage';
import Page from '../../components/base-ui/Page';
import { TextB, TextR } from '../../components/base-ui/TextAtm';
import { RootTabScreenProps } from '../../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const width = Dimensions.get('window').width;
	const phoneWidth = width < 500 ? true : false;

	const _start = () => {
		navigation.navigate('Chapters');
		return;
	};

	return (
		<Page>
			<ContainerImage source={require('../../assets/images/welcome-bg.png')} />
			<View
				style={{
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<TextB
					size={phoneWidth ? responsiveFontSize(2.3) : responsiveFontSize(1.7)}
					color={'#595959'}
					mb={13}
					center
					mr={5}
					ml={5}
				>
					Welcome Friend, Have you ever dreamed of being a millionaire when you
					grow up?
				</TextB>
				<TextR
					color={'#7a7a7a'}
					size={responsiveFontSize(2)}
					center
					mb={10}
					mr={5}
					ml={5}
				>
					With hard work and the right information, you can! You are never too
					young to get on your way and learning the basics of what adults (and
					kids!) do with their money is the first step. Start reading, and
					you'll be well on your way!
				</TextR>
				<ButtonLetGo activeOpacity={0.75} onPress={_start}>
					<SvgLetGo />
				</ButtonLetGo>
			</View>
		</Page>
	);
}
const ButtonLetGo = styled.TouchableOpacity`
	margin-bottom: ${responsiveHeight(2)}px;
`;

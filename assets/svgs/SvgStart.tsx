import * as React from 'react';
import Svg, { G, Rect, Path, Ellipse, Circle, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent() {
	return (
		<Svg width={262} height={78} viewBox="0 0 262 78" fill="none">
			<G>
				<Rect x={7} y={3} width={248} height={64} rx={32} fill="#ff1f1f" />
			</G>
			<Path
				d="M83.72 35.96a31.528 31.528 0 00.18 3.74 29.2 29.2 0 00.66 3.58c-.4.107-.846.193-1.34.26-.48.067-1.02.113-1.62.14a23.67 23.67 0 01-.46-1.02c-.133-.36-.26-.72-.38-1.08-.506.613-1.08 1.073-1.72 1.38-.64.307-1.353.46-2.14.46-1.373 0-2.466-.507-3.28-1.52-.8-1.013-1.2-2.387-1.2-4.12 0-2.6.627-4.793 1.88-6.58 1.254-1.787 2.834-2.68 4.74-2.68 1.32 0 2.374.387 3.16 1.16.8.76 1.26 1.827 1.38 3.2-.586.187-1.213.327-1.88.42a15.34 15.34 0 01-2.16.14c-.16-.933-.333-1.587-.52-1.96-.186-.373-.426-.56-.72-.56-.506 0-.913.513-1.22 1.54-.306 1.027-.46 2.387-.46 4.08 0 1.307.134 2.26.4 2.86.267.6.694.9 1.28.9.374 0 .714-.12 1.02-.36.307-.253.554-.607.74-1.06a39.466 39.466 0 01-.18-1.24 19.544 19.544 0 01-.12-1.24 10.923 10.923 0 011.74-.32c.64-.08 1.38-.12 2.22-.12zm6.663.12c.16.04.314.073.46.1.16.013.294.02.4.02h.36c.147-.013.247-.027.3-.04.08-.32.14-.62.18-.9a4.1 4.1 0 00.08-.76c0-.28-.04-.487-.12-.62a.335.335 0 00-.32-.2c-.266 0-.52.22-.76.66-.24.427-.433 1.007-.58 1.74zm2.42 3.08c.507.093 1.02.28 1.54.56.534.267.967.573 1.3.92-.106.347-.353.72-.74 1.12-.386.4-.846.733-1.38 1a5.782 5.782 0 01-1.4.48c-.493.12-1.013.18-1.56.18-1.386 0-2.473-.4-3.26-1.2-.773-.813-1.16-1.913-1.16-3.3 0-.867.134-1.713.4-2.54.28-.84.674-1.6 1.18-2.28.574-.76 1.234-1.353 1.98-1.78.747-.427 1.514-.64 2.3-.64 1.12 0 2.014.287 2.68.86.667.56 1 1.313 1 2.26 0 .427-.046.9-.14 1.42-.08.507-.186.947-.32 1.32-.413.2-.926.353-1.54.46-.6.093-1.32.14-2.16.14-.24 0-.48-.013-.72-.04-.226-.027-.453-.06-.68-.1-.013.08-.02.173-.02.28v.44c0 .8.1 1.413.3 1.84.214.427.514.64.9.64.254 0 .527-.207.82-.62.294-.413.52-.887.68-1.42zm10.223-.8a5.4 5.4 0 011.38.36c.48.187.907.427 1.28.72 0 .96-.3 1.773-.9 2.44-.6.667-1.433 1-2.5 1-1.346 0-2.393-.473-3.14-1.42-.733-.96-1.1-2.347-1.1-4.16 0-.427.007-.867.02-1.32.014-.467.04-.953.08-1.46a11.108 11.108 0 01-1.4-.3c0-.427.04-.833.12-1.22.08-.387.194-.687.34-.9.134.04.294.087.48.14.2.04.44.08.72.12.08-.547.16-1.02.24-1.42.094-.413.187-.78.28-1.1.8 0 1.574.053 2.32.16.76.093 1.374.22 1.84.38-.08.32-.166.68-.26 1.08-.093.387-.173.787-.24 1.2.56.013 1.094.013 1.6 0 .52-.027.974-.067 1.36-.12 0 .307-.033.653-.1 1.04-.066.387-.16.74-.28 1.06-.333.067-.76.12-1.28.16a22.05 22.05 0 01-1.64.02c-.066.507-.12 1.013-.16 1.52-.04.507-.06.987-.06 1.44 0 1.12.04 1.88.12 2.28.08.387.214.58.4.58.12 0 .227-.2.32-.6.094-.413.147-.973.16-1.68zm18.294-2.2c.307.427.534.88.68 1.36.147.467.22.973.22 1.52 0 1.373-.493 2.513-1.48 3.42-.986.893-2.2 1.34-3.64 1.34-1.586 0-2.913-.487-3.98-1.46-1.053-.987-1.58-2.153-1.58-3.5.427-.213.94-.393 1.54-.54.614-.16 1.12-.24 1.52-.24 0 1.013.187 1.833.56 2.46.387.613.907.92 1.56.92.467 0 .827-.127 1.08-.38.254-.267.38-.627.38-1.08 0-.387-.133-.76-.4-1.12-.253-.373-.826-.9-1.72-1.58-.666-.507-1.16-.913-1.48-1.22a8.269 8.269 0 01-.82-.9c-.32-.453-.56-.92-.72-1.4a5.091 5.091 0 01-.24-1.58c0-1.333.474-2.42 1.42-3.26.96-.84 2.214-1.26 3.76-1.26 1.374 0 2.474.333 3.3 1 .84.653 1.394 1.627 1.66 2.92a4.967 4.967 0 01-1.32.6c-.493.133-1.14.227-1.94.28-.12-.827-.32-1.42-.6-1.78-.28-.36-.666-.54-1.16-.54-.306 0-.553.1-.74.3-.173.187-.26.44-.26.76 0 .44.134.86.4 1.26.267.4.854.94 1.76 1.62.667.493 1.154.887 1.46 1.18.307.293.567.593.78.9zm8.682 2.2a5.4 5.4 0 011.38.36c.48.187.907.427 1.28.72 0 .96-.3 1.773-.9 2.44-.6.667-1.433 1-2.5 1-1.346 0-2.393-.473-3.14-1.42-.733-.96-1.1-2.347-1.1-4.16 0-.427.007-.867.02-1.32.014-.467.04-.953.08-1.46a11.187 11.187 0 01-1.4-.3c0-.427.04-.833.12-1.22.08-.387.194-.687.34-.9.134.04.294.087.48.14.2.04.44.08.72.12.08-.547.16-1.02.24-1.42.094-.413.187-.78.28-1.1.8 0 1.574.053 2.32.16.76.093 1.374.22 1.84.38-.08.32-.166.68-.26 1.08-.093.387-.173.787-.24 1.2.56.013 1.094.013 1.6 0 .52-.027.974-.067 1.36-.12 0 .307-.033.653-.1 1.04-.066.387-.16.74-.28 1.06-.333.067-.76.12-1.28.16a22.05 22.05 0 01-1.64.02c-.066.507-.12 1.013-.16 1.52-.04.507-.06.987-.06 1.44 0 1.12.04 1.88.12 2.28.08.387.214.58.4.58.12 0 .227-.2.32-.6.094-.413.147-.973.16-1.68zm13.939-2.52c0 .84-.113 1.987-.34 3.44a60.743 60.743 0 01-.88 4.46c-.466 0-.966-.033-1.5-.1a14.647 14.647 0 01-1.56-.24l.06-.52c.014-.12.027-.227.04-.32a4.63 4.63 0 01-.92.28 5.5 5.5 0 01-1.08.1c-1.106 0-1.993-.273-2.66-.82-.666-.56-1-1.307-1-2.24 0-.947.38-1.653 1.14-2.12.774-.48 1.934-.72 3.48-.72h1.02c.174 0 .314.007.42.02-.013-1.253-.093-2.107-.24-2.56-.146-.453-.386-.68-.72-.68-.32 0-.6.22-.84.66-.226.427-.346.973-.36 1.64-.853 0-1.566-.16-2.14-.48-.56-.32-.946-.78-1.16-1.38.254-.693.827-1.287 1.72-1.78.894-.493 1.927-.74 3.1-.74 1.454 0 2.554.347 3.3 1.04.747.693 1.12 1.713 1.12 3.06zm-5.86 4.32c0 .307.08.547.24.72.16.16.394.24.7.24.187 0 .354-.02.5-.06.147-.04.294-.1.44-.18.054-.467.087-.867.1-1.2.027-.347.047-.66.06-.94-.693.04-1.206.173-1.54.4-.333.227-.5.567-.5 1.02zm12.275-1.22c.027.653.074 1.327.14 2.02.08.68.174 1.367.28 2.06-.333.12-.706.2-1.12.24-.413.04-.866.04-1.36 0a5.446 5.446 0 01-.68-.1 5.511 5.511 0 01-.5-.14c-.36-1.56-.62-3.34-.78-5.34-.16-2.013-.18-3.78-.06-5.3.294-.093.614-.16.96-.2.347-.053.714-.08 1.1-.08.454 0 .874.033 1.26.1.4.067.754.16 1.06.28-.053.2-.1.44-.14.72-.04.267-.073.567-.1.9.334-.76.74-1.353 1.22-1.78.48-.44.974-.66 1.48-.66.747 0 1.34.313 1.78.94.44.613.66 1.467.66 2.56v.44c0 .093-.006.18-.02.26-.413.147-.933.247-1.56.3-.613.053-1.28.06-2 .02.014-.2.02-.333.02-.4.014-.08.02-.153.02-.22 0-.333-.04-.587-.12-.76-.08-.187-.2-.28-.36-.28-.253 0-.486.387-.7 1.16-.213.773-.373 1.86-.48 3.26zm12.833-.58a5.42 5.42 0 011.38.36c.48.187.907.427 1.28.72 0 .96-.3 1.773-.9 2.44-.6.667-1.433 1-2.5 1-1.347 0-2.393-.473-3.14-1.42-.733-.96-1.1-2.347-1.1-4.16 0-.427.007-.867.02-1.32.013-.467.04-.953.08-1.46a11.074 11.074 0 01-1.4-.3c0-.427.04-.833.12-1.22.08-.387.193-.687.34-.9.133.04.293.087.48.14.2.04.44.08.72.12.08-.547.16-1.02.24-1.42.093-.413.187-.78.28-1.1.8 0 1.573.053 2.32.16.76.093 1.373.22 1.84.38-.08.32-.167.68-.26 1.08-.093.387-.173.787-.24 1.2.56.013 1.093.013 1.6 0 .52-.027.973-.067 1.36-.12 0 .307-.033.653-.1 1.04s-.16.74-.28 1.06c-.333.067-.76.12-1.28.16-.52.027-1.067.033-1.64.02-.067.507-.12 1.013-.16 1.52-.04.507-.06.987-.06 1.44 0 1.12.04 1.88.12 2.28.08.387.213.58.4.58.12 0 .227-.2.32-.6.093-.413.147-.973.16-1.68zm8.459-2.28c.16.04.314.073.46.1a5 5 0 00.4.02h.36a2.33 2.33 0 00.3-.04c.08-.32.14-.62.18-.9.054-.28.08-.533.08-.76 0-.28-.04-.487-.12-.62a.334.334 0 00-.32-.2c-.266 0-.52.22-.76.66-.24.427-.433 1.007-.58 1.74zm2.42 3.08a5.26 5.26 0 011.54.56c.534.267.967.573 1.3.92-.106.347-.353.72-.74 1.12-.386.4-.846.733-1.38 1a5.765 5.765 0 01-1.4.48c-.493.12-1.013.18-1.56.18-1.386 0-2.473-.4-3.26-1.2-.773-.813-1.16-1.913-1.16-3.3 0-.867.134-1.713.4-2.54.28-.84.674-1.6 1.18-2.28.574-.76 1.234-1.353 1.98-1.78.747-.427 1.514-.64 2.3-.64 1.12 0 2.014.287 2.68.86.667.56 1 1.313 1 2.26 0 .427-.046.9-.14 1.42-.08.507-.186.947-.32 1.32-.413.2-.926.353-1.54.46-.6.093-1.32.14-2.16.14-.24 0-.48-.013-.72-.04-.226-.027-.453-.06-.68-.1-.013.08-.02.173-.02.28v.44c0 .8.1 1.413.3 1.84.214.427.514.64.9.64.254 0 .527-.207.82-.62.294-.413.52-.887.68-1.42zm14.719 4.28c-.387.107-.88.2-1.48.28-.587.08-1.12.12-1.6.12-.054-.267-.114-.58-.18-.94a24.59 24.59 0 01-.2-1.3c-.294.68-.667 1.18-1.12 1.5-.44.333-.98.5-1.62.5-1.174 0-2.08-.433-2.72-1.3-.64-.867-.96-2.073-.96-3.62 0-1.96.486-3.52 1.46-4.68.986-1.173 2.313-1.76 3.98-1.76h.16c.053 0 .1.007.14.02l-.04-1.7c-.014-.56-.02-1.087-.02-1.58.306-.16.74-.287 1.3-.38.56-.093 1.133-.14 1.72-.14a7.458 7.458 0 011.54.16c-.134.933-.24 2.44-.32 4.52-.067 2.08-.1 4.707-.1 7.88v1.12c.013.36.033.793.06 1.3zm-5.98-5.24c0 .853.086 1.507.26 1.96.173.44.426.66.76.66.24 0 .46-.2.66-.6.213-.4.38-.967.5-1.7-.067-.92-.12-1.693-.16-2.32-.04-.64-.074-1.233-.1-1.78h-.14c-.547 0-.98.333-1.3 1-.32.653-.48 1.58-.48 2.78z"
				fill="#fff"
			/>
			<Ellipse
				cx={28.577}
				cy={14.053}
				rx={6}
				ry={3}
				transform="rotate(-26.796 28.577 14.053)"
				fill="#fff"
				fillOpacity={0.69}
			/>
			<Circle cx={18} cy={22} r={3} fill="#fff" fillOpacity={0.69} />
		</Svg>
	);
}

const SvgStart = React.memo(SvgComponent);
export default SvgStart;
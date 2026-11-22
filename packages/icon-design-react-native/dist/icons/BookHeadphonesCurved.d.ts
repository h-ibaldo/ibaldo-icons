import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookHeadphonesCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookHeadphonesCurved: ForwardRefExoticComponent<BookHeadphonesCurvedProps & RefAttributes<Svg>>;

export default BookHeadphonesCurved;
export { BookHeadphonesCurved };

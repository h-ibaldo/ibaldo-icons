import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookAlertProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookAlert: ForwardRefExoticComponent<BookAlertProps & RefAttributes<Svg>>;

export default BookAlert;
export { BookAlert };

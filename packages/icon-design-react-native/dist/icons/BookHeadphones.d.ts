import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookHeadphonesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookHeadphones: ForwardRefExoticComponent<BookHeadphonesProps & RefAttributes<Svg>>;

export default BookHeadphones;
export { BookHeadphones };

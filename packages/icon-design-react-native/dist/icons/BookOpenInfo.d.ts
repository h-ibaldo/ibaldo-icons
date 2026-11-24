import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenInfoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenInfo: ForwardRefExoticComponent<BookOpenInfoProps & RefAttributes<Svg>>;

export default BookOpenInfo;
export { BookOpenInfo };

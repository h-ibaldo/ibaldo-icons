import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenInfoCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenInfoCurved: ForwardRefExoticComponent<BookOpenInfoCurvedProps & RefAttributes<Svg>>;

export default BookOpenInfoCurved;
export { BookOpenInfoCurved };

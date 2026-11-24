import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookStack: ForwardRefExoticComponent<BookStackProps & RefAttributes<Svg>>;

export default BookStack;
export { BookStack };

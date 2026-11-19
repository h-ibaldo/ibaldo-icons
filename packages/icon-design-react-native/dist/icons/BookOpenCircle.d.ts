import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenCircle: ForwardRefExoticComponent<BookOpenCircleProps & RefAttributes<Svg>>;

export default BookOpenCircle;
export { BookOpenCircle };

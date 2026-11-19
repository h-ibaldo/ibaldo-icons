import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenText: ForwardRefExoticComponent<BookOpenTextProps & RefAttributes<Svg>>;

export default BookOpenText;
export { BookOpenText };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenBare: ForwardRefExoticComponent<BookOpenBareProps & RefAttributes<Svg>>;

export default BookOpenBare;
export { BookOpenBare };

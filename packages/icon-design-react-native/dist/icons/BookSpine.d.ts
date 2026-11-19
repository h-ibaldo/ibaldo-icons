import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookSpineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookSpine: ForwardRefExoticComponent<BookSpineProps & RefAttributes<Svg>>;

export default BookSpine;
export { BookSpine };

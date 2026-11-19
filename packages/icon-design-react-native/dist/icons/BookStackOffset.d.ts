import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookStackOffsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookStackOffset: ForwardRefExoticComponent<BookStackOffsetProps & RefAttributes<Svg>>;

export default BookStackOffset;
export { BookStackOffset };

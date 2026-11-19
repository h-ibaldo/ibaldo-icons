import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookTextRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookTextRound: ForwardRefExoticComponent<BookTextRoundProps & RefAttributes<Svg>>;

export default BookTextRound;
export { BookTextRound };

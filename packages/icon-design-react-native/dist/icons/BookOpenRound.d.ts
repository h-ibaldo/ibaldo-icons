import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenRound: ForwardRefExoticComponent<BookOpenRoundProps & RefAttributes<Svg>>;

export default BookOpenRound;
export { BookOpenRound };

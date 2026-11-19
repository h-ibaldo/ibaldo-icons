import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenCoverProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenCover: ForwardRefExoticComponent<BookOpenCoverProps & RefAttributes<Svg>>;

export default BookOpenCover;
export { BookOpenCover };

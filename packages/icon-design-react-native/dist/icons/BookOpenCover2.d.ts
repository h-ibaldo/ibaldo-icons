import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenCover2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenCover2: ForwardRefExoticComponent<BookOpenCover2Props & RefAttributes<Svg>>;

export default BookOpenCover2;
export { BookOpenCover2 };

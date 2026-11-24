import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpen: ForwardRefExoticComponent<BookOpenProps & RefAttributes<Svg>>;

export default BookOpen;
export { BookOpen };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookOpenPageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookOpenPage: ForwardRefExoticComponent<BookOpenPageProps & RefAttributes<Svg>>;

export default BookOpenPage;
export { BookOpenPage };

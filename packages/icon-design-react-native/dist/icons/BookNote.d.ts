import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookNoteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BookNote: ForwardRefExoticComponent<BookNoteProps & RefAttributes<Svg>>;

export default BookNote;
export { BookNote };

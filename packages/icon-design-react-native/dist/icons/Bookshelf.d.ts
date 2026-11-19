import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BookshelfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Bookshelf: ForwardRefExoticComponent<BookshelfProps & RefAttributes<Svg>>;

export default Bookshelf;
export { Bookshelf };

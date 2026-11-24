import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListSquareCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListSquareCursor: ForwardRefExoticComponent<ListSquareCursorProps & RefAttributes<Svg>>;

export default ListSquareCursor;
export { ListSquareCursor };

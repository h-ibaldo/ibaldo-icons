import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ListCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ListCursor: ForwardRefExoticComponent<ListCursorProps & RefAttributes<Svg>>;

export default ListCursor;
export { ListCursor };

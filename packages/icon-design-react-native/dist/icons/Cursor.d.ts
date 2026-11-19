import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Cursor: ForwardRefExoticComponent<CursorProps & RefAttributes<Svg>>;

export default Cursor;
export { Cursor };

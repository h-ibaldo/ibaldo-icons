import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DragCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DragCursor: ForwardRefExoticComponent<DragCursorProps & RefAttributes<Svg>>;

export default DragCursor;
export { DragCursor };

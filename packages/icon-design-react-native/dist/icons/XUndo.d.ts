import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XUndoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XUndo: ForwardRefExoticComponent<XUndoProps & RefAttributes<Svg>>;

export default XUndo;
export { XUndo };

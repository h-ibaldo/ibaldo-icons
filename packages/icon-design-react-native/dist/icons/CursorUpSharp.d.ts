import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUpSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUpSharp: ForwardRefExoticComponent<CursorUpSharpProps & RefAttributes<Svg>>;

export default CursorUpSharp;
export { CursorUpSharp };

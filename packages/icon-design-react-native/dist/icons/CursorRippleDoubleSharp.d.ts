import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorRippleDoubleSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorRippleDoubleSharp: ForwardRefExoticComponent<CursorRippleDoubleSharpProps & RefAttributes<Svg>>;

export default CursorRippleDoubleSharp;
export { CursorRippleDoubleSharp };

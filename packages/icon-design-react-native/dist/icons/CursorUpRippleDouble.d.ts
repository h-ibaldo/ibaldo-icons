import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUpRippleDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUpRippleDouble: ForwardRefExoticComponent<CursorUpRippleDoubleProps & RefAttributes<Svg>>;

export default CursorUpRippleDouble;
export { CursorUpRippleDouble };

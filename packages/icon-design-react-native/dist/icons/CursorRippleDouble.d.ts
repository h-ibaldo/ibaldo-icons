import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorRippleDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorRippleDouble: ForwardRefExoticComponent<CursorRippleDoubleProps & RefAttributes<Svg>>;

export default CursorRippleDouble;
export { CursorRippleDouble };

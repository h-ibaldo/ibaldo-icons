import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorRippleDouble2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorRippleDouble2: ForwardRefExoticComponent<CursorRippleDouble2Props & RefAttributes<Svg>>;

export default CursorRippleDouble2;
export { CursorRippleDouble2 };

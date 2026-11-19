import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorRippleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorRippleLarge: ForwardRefExoticComponent<CursorRippleLargeProps & RefAttributes<Svg>>;

export default CursorRippleLarge;
export { CursorRippleLarge };

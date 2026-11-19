import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUpRippleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUpRipple: ForwardRefExoticComponent<CursorUpRippleProps & RefAttributes<Svg>>;

export default CursorUpRipple;
export { CursorUpRipple };

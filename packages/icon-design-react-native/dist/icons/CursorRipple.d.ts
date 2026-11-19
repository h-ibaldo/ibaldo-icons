import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorRippleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorRipple: ForwardRefExoticComponent<CursorRippleProps & RefAttributes<Svg>>;

export default CursorRipple;
export { CursorRipple };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XCircleLarge: ForwardRefExoticComponent<XCircleLargeProps & RefAttributes<Svg>>;

export default XCircleLarge;
export { XCircleLarge };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XSquareLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XSquareLarge: ForwardRefExoticComponent<XSquareLargeProps & RefAttributes<Svg>>;

export default XSquareLarge;
export { XSquareLarge };

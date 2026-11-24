import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XLarge: ForwardRefExoticComponent<XLargeProps & RefAttributes<Svg>>;

export default XLarge;
export { XLarge };

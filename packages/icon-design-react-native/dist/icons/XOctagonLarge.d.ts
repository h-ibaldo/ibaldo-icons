import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface XOctagonLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const XOctagonLarge: ForwardRefExoticComponent<XOctagonLargeProps & RefAttributes<Svg>>;

export default XOctagonLarge;
export { XOctagonLarge };

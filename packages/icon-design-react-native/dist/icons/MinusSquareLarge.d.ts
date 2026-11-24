import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinusSquareLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinusSquareLarge: ForwardRefExoticComponent<MinusSquareLargeProps & RefAttributes<Svg>>;

export default MinusSquareLarge;
export { MinusSquareLarge };

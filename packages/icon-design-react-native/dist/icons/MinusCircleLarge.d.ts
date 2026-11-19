import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinusCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MinusCircleLarge: ForwardRefExoticComponent<MinusCircleLargeProps & RefAttributes<Svg>>;

export default MinusCircleLarge;
export { MinusCircleLarge };

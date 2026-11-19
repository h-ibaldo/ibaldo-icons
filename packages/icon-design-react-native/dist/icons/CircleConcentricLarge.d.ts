import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleConcentricLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleConcentricLarge: ForwardRefExoticComponent<CircleConcentricLargeProps & RefAttributes<Svg>>;

export default CircleConcentricLarge;
export { CircleConcentricLarge };

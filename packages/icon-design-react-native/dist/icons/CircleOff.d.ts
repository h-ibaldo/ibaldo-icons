import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleOff: ForwardRefExoticComponent<CircleOffProps & RefAttributes<Svg>>;

export default CircleOff;
export { CircleOff };

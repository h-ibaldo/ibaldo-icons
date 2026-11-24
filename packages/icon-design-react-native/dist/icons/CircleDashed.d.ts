import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleDashed: ForwardRefExoticComponent<CircleDashedProps & RefAttributes<Svg>>;

export default CircleDashed;
export { CircleDashed };

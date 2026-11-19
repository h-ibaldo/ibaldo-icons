import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleCrescentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleCrescent: ForwardRefExoticComponent<CircleCrescentProps & RefAttributes<Svg>>;

export default CircleCrescent;
export { CircleCrescent };

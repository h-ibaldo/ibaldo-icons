import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleSplit: ForwardRefExoticComponent<CircleSplitProps & RefAttributes<Svg>>;

export default CircleSplit;
export { CircleSplit };

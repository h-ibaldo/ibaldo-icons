import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleStack: ForwardRefExoticComponent<CircleStackProps & RefAttributes<Svg>>;

export default CircleStack;
export { CircleStack };

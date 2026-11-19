import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleStackTightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleStackTight: ForwardRefExoticComponent<CircleStackTightProps & RefAttributes<Svg>>;

export default CircleStackTight;
export { CircleStackTight };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SelfieBezelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SelfieBezel: ForwardRefExoticComponent<SelfieBezelProps & RefAttributes<Svg>>;

export default SelfieBezel;
export { SelfieBezel };

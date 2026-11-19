import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandFallingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSandFalling: ForwardRefExoticComponent<HourglassSandFallingProps & RefAttributes<Svg>>;

export default HourglassSandFalling;
export { HourglassSandFalling };

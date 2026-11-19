import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSand: ForwardRefExoticComponent<HourglassSandProps & RefAttributes<Svg>>;

export default HourglassSand;
export { HourglassSand };

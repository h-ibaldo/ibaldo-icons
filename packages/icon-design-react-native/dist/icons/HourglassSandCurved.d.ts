import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSandCurved: ForwardRefExoticComponent<HourglassSandCurvedProps & RefAttributes<Svg>>;

export default HourglassSandCurved;
export { HourglassSandCurved };

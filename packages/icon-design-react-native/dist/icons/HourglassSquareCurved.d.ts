import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSquareCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSquareCurved: ForwardRefExoticComponent<HourglassSquareCurvedProps & RefAttributes<Svg>>;

export default HourglassSquareCurved;
export { HourglassSquareCurved };

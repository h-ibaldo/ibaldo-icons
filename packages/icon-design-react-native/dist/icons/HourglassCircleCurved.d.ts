import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassCircleCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassCircleCurved: ForwardRefExoticComponent<HourglassCircleCurvedProps & RefAttributes<Svg>>;

export default HourglassCircleCurved;
export { HourglassCircleCurved };

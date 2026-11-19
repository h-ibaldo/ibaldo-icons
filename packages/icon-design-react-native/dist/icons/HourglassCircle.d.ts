import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassCircle: ForwardRefExoticComponent<HourglassCircleProps & RefAttributes<Svg>>;

export default HourglassCircle;
export { HourglassCircle };

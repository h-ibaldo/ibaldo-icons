import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassStandCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassStandCircle: ForwardRefExoticComponent<HourglassStandCircleProps & RefAttributes<Svg>>;

export default HourglassStandCircle;
export { HourglassStandCircle };

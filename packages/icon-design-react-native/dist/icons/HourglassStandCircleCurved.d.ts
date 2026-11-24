import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassStandCircleCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassStandCircleCurved: ForwardRefExoticComponent<HourglassStandCircleCurvedProps & RefAttributes<Svg>>;

export default HourglassStandCircleCurved;
export { HourglassStandCircleCurved };

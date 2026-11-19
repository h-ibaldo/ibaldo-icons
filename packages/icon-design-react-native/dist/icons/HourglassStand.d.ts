import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassStandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassStand: ForwardRefExoticComponent<HourglassStandProps & RefAttributes<Svg>>;

export default HourglassStand;
export { HourglassStand };

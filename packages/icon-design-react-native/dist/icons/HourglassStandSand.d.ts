import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassStandSandProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassStandSand: ForwardRefExoticComponent<HourglassStandSandProps & RefAttributes<Svg>>;

export default HourglassStandSand;
export { HourglassStandSand };

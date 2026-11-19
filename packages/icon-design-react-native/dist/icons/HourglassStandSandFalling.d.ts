import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassStandSandFallingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassStandSandFalling: ForwardRefExoticComponent<HourglassStandSandFallingProps & RefAttributes<Svg>>;

export default HourglassStandSandFalling;
export { HourglassStandSandFalling };

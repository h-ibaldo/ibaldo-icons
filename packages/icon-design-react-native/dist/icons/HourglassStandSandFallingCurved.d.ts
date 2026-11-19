import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassStandSandFallingCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassStandSandFallingCurved: ForwardRefExoticComponent<HourglassStandSandFallingCurvedProps & RefAttributes<Svg>>;

export default HourglassStandSandFallingCurved;
export { HourglassStandSandFallingCurved };

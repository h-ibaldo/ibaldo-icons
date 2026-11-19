import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandFallingCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSandFallingCurved: ForwardRefExoticComponent<HourglassSandFallingCurvedProps & RefAttributes<Svg>>;

export default HourglassSandFallingCurved;
export { HourglassSandFallingCurved };

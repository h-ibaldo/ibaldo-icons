import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSync: ForwardRefExoticComponent<HourglassSyncProps & RefAttributes<Svg>>;

export default HourglassSync;
export { HourglassSync };

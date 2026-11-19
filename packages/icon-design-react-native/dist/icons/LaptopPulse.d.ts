import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopPulseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopPulse: ForwardRefExoticComponent<LaptopPulseProps & RefAttributes<Svg>>;

export default LaptopPulse;
export { LaptopPulse };

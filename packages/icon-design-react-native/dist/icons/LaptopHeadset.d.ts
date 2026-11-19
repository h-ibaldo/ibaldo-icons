import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopHeadsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopHeadset: ForwardRefExoticComponent<LaptopHeadsetProps & RefAttributes<Svg>>;

export default LaptopHeadset;
export { LaptopHeadset };

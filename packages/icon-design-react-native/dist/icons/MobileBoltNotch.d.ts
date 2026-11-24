import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileBoltNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileBoltNotch: ForwardRefExoticComponent<MobileBoltNotchProps & RefAttributes<Svg>>;

export default MobileBoltNotch;
export { MobileBoltNotch };

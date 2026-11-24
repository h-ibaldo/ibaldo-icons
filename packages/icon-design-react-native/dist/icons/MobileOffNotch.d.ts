import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileOffNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileOffNotch: ForwardRefExoticComponent<MobileOffNotchProps & RefAttributes<Svg>>;

export default MobileOffNotch;
export { MobileOffNotch };

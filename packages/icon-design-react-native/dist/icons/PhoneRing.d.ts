import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneRingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneRing: ForwardRefExoticComponent<PhoneRingProps & RefAttributes<Svg>>;

export default PhoneRing;
export { PhoneRing };

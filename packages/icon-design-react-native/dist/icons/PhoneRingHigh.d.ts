import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneRingHighProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneRingHigh: ForwardRefExoticComponent<PhoneRingHighProps & RefAttributes<Svg>>;

export default PhoneRingHigh;
export { PhoneRingHigh };

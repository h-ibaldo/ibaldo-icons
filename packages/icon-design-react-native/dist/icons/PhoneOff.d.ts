import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneOff: ForwardRefExoticComponent<PhoneOffProps & RefAttributes<Svg>>;

export default PhoneOff;
export { PhoneOff };

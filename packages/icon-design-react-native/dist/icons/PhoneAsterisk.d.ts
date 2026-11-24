import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneAsteriskProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneAsterisk: ForwardRefExoticComponent<PhoneAsteriskProps & RefAttributes<Svg>>;

export default PhoneAsterisk;
export { PhoneAsterisk };

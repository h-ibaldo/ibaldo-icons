import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneCheck: ForwardRefExoticComponent<PhoneCheckProps & RefAttributes<Svg>>;

export default PhoneCheck;
export { PhoneCheck };

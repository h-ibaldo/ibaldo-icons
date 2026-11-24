import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneHashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneHash: ForwardRefExoticComponent<PhoneHashProps & RefAttributes<Svg>>;

export default PhoneHash;
export { PhoneHash };

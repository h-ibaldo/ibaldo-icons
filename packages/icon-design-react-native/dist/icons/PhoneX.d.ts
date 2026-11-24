import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneX: ForwardRefExoticComponent<PhoneXProps & RefAttributes<Svg>>;

export default PhoneX;
export { PhoneX };

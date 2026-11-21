import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneCircle: ForwardRefExoticComponent<PhoneCircleProps & RefAttributes<Svg>>;

export default PhoneCircle;
export { PhoneCircle };

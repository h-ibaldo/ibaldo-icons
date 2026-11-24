import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhonePlusOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhonePlusOne: ForwardRefExoticComponent<PhonePlusOneProps & RefAttributes<Svg>>;

export default PhonePlusOne;
export { PhonePlusOne };

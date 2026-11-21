import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneHeart: ForwardRefExoticComponent<PhoneHeartProps & RefAttributes<Svg>>;

export default PhoneHeart;
export { PhoneHeart };

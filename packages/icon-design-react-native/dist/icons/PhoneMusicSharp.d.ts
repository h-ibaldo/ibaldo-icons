import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneMusicSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneMusicSharp: ForwardRefExoticComponent<PhoneMusicSharpProps & RefAttributes<Svg>>;

export default PhoneMusicSharp;
export { PhoneMusicSharp };

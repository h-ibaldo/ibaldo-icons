import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneRaysSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneRaysSharp: ForwardRefExoticComponent<PhoneRaysSharpProps & RefAttributes<Svg>>;

export default PhoneRaysSharp;
export { PhoneRaysSharp };

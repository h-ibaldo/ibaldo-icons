import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhonePauseSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhonePauseSharp: ForwardRefExoticComponent<PhonePauseSharpProps & RefAttributes<Svg>>;

export default PhonePauseSharp;
export { PhonePauseSharp };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SignalArcsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SignalArcs: ForwardRefExoticComponent<SignalArcsProps & RefAttributes<Svg>>;

export default SignalArcs;
export { SignalArcs };

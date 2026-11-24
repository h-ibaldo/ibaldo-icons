import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SignalBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SignalBars: ForwardRefExoticComponent<SignalBarsProps & RefAttributes<Svg>>;

export default SignalBars;
export { SignalBars };

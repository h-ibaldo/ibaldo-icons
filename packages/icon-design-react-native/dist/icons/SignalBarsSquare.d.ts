import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SignalBarsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SignalBarsSquare: ForwardRefExoticComponent<SignalBarsSquareProps & RefAttributes<Svg>>;

export default SignalBarsSquare;
export { SignalBarsSquare };

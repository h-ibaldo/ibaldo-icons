import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PulseSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PulseSquare: ForwardRefExoticComponent<PulseSquareProps & RefAttributes<Svg>>;

export default PulseSquare;
export { PulseSquare };

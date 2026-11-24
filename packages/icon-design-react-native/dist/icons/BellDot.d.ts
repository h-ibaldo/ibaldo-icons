import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellDot: ForwardRefExoticComponent<BellDotProps & RefAttributes<Svg>>;

export default BellDot;
export { BellDot };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSquareDot: ForwardRefExoticComponent<BellSquareDotProps & RefAttributes<Svg>>;

export default BellSquareDot;
export { BellSquareDot };

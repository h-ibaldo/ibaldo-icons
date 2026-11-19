import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareDot: ForwardRefExoticComponent<SquareDotProps & RefAttributes<Svg>>;

export default SquareDot;
export { SquareDot };

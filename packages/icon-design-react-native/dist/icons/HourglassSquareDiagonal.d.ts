import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSquareDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSquareDiagonal: ForwardRefExoticComponent<HourglassSquareDiagonalProps & RefAttributes<Svg>>;

export default HourglassSquareDiagonal;
export { HourglassSquareDiagonal };

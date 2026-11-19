import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassDiagonal: ForwardRefExoticComponent<HourglassDiagonalProps & RefAttributes<Svg>>;

export default HourglassDiagonal;
export { HourglassDiagonal };

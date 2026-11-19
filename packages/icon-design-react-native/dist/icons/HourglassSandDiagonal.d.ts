import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSandDiagonal: ForwardRefExoticComponent<HourglassSandDiagonalProps & RefAttributes<Svg>>;

export default HourglassSandDiagonal;
export { HourglassSandDiagonal };

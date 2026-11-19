import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandFallingDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSandFallingDiagonal: ForwardRefExoticComponent<HourglassSandFallingDiagonalProps & RefAttributes<Svg>>;

export default HourglassSandFallingDiagonal;
export { HourglassSandFallingDiagonal };

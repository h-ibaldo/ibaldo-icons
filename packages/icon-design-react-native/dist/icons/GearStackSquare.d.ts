import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearStackSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearStackSquare: ForwardRefExoticComponent<GearStackSquareProps & RefAttributes<Svg>>;

export default GearStackSquare;
export { GearStackSquare };

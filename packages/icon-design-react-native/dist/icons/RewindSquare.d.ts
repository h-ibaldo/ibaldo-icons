import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RewindSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RewindSquare: ForwardRefExoticComponent<RewindSquareProps & RefAttributes<Svg>>;

export default RewindSquare;
export { RewindSquare };

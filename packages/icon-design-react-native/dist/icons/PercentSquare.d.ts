import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PercentSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PercentSquare: ForwardRefExoticComponent<PercentSquareProps & RefAttributes<Svg>>;

export default PercentSquare;
export { PercentSquare };

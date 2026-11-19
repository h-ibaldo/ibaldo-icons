import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareEditXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareEditX: ForwardRefExoticComponent<SquareEditXProps & RefAttributes<Svg>>;

export default SquareEditX;
export { SquareEditX };

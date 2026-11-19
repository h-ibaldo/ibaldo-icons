import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareLinesLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareLinesLeft: ForwardRefExoticComponent<SquareLinesLeftProps & RefAttributes<Svg>>;

export default SquareLinesLeft;
export { SquareLinesLeft };

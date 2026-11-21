import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EqualsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EqualsSquare: ForwardRefExoticComponent<EqualsSquareProps & RefAttributes<Svg>>;

export default EqualsSquare;
export { EqualsSquare };

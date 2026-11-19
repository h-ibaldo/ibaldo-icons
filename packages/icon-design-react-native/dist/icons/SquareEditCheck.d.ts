import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareEditCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareEditCheck: ForwardRefExoticComponent<SquareEditCheckProps & RefAttributes<Svg>>;

export default SquareEditCheck;
export { SquareEditCheck };

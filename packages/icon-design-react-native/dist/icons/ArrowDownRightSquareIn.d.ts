import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightSquareInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightSquareIn: ForwardRefExoticComponent<ArrowDownRightSquareInProps & RefAttributes<Svg>>;

export default ArrowDownRightSquareIn;
export { ArrowDownRightSquareIn };

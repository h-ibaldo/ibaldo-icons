import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleIn: ForwardRefExoticComponent<ArrowDownCircleInProps & RefAttributes<Svg>>;

export default ArrowDownCircleIn;
export { ArrowDownCircleIn };

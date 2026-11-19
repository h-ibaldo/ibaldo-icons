import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightCircleOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightCircleOut: ForwardRefExoticComponent<ArrowDownRightCircleOutProps & RefAttributes<Svg>>;

export default ArrowDownRightCircleOut;
export { ArrowDownRightCircleOut };

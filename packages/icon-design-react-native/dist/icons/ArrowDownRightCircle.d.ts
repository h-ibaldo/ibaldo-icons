import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightCircle: ForwardRefExoticComponent<ArrowDownRightCircleProps & RefAttributes<Svg>>;

export default ArrowDownRightCircle;
export { ArrowDownRightCircle };

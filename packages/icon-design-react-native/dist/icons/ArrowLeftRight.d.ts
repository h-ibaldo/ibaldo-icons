import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftRight: ForwardRefExoticComponent<ArrowLeftRightProps & RefAttributes<Svg>>;

export default ArrowLeftRight;
export { ArrowLeftRight };

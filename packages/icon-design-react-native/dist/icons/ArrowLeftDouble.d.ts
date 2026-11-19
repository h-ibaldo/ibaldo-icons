import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftDouble: ForwardRefExoticComponent<ArrowLeftDoubleProps & RefAttributes<Svg>>;

export default ArrowLeftDouble;
export { ArrowLeftDouble };

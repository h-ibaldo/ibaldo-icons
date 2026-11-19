import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownDouble: ForwardRefExoticComponent<ArrowDownDoubleProps & RefAttributes<Svg>>;

export default ArrowDownDouble;
export { ArrowDownDouble };

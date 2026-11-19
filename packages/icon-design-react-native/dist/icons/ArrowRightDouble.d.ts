import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightDouble: ForwardRefExoticComponent<ArrowRightDoubleProps & RefAttributes<Svg>>;

export default ArrowRightDouble;
export { ArrowRightDouble };

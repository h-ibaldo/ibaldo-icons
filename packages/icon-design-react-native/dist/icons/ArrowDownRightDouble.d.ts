import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightDouble: ForwardRefExoticComponent<ArrowDownRightDoubleProps & RefAttributes<Svg>>;

export default ArrowDownRightDouble;
export { ArrowDownRightDouble };

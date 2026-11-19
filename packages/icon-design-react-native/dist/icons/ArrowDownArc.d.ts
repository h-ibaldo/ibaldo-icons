import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownArc: ForwardRefExoticComponent<ArrowDownArcProps & RefAttributes<Svg>>;

export default ArrowDownArc;
export { ArrowDownArc };

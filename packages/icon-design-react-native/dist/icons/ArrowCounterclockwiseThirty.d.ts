import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseThirtyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseThirty: ForwardRefExoticComponent<ArrowCounterclockwiseThirtyProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseThirty;
export { ArrowCounterclockwiseThirty };

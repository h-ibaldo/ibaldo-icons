import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseX: ForwardRefExoticComponent<ArrowClockwiseXProps & RefAttributes<Svg>>;

export default ArrowClockwiseX;
export { ArrowClockwiseX };

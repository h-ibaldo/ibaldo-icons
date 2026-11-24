import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDashedHalfSparseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDashedHalfSparse: ForwardRefExoticComponent<ClockDashedHalfSparseProps & RefAttributes<Svg>>;

export default ClockDashedHalfSparse;
export { ClockDashedHalfSparse };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleDashedHalfSparseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashedHalfSparse: ForwardRefExoticComponent<CheckCircleDashedHalfSparseProps & RefAttributes<Svg>>;

export default CheckCircleDashedHalfSparse;
export { CheckCircleDashedHalfSparse };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftNarrow: ForwardRefExoticComponent<ArrowLeftNarrowProps & RefAttributes<Svg>>;

export default ArrowLeftNarrow;
export { ArrowLeftNarrow };

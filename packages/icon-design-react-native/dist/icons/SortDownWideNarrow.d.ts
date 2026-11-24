import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SortDownWideNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SortDownWideNarrow: ForwardRefExoticComponent<SortDownWideNarrowProps & RefAttributes<Svg>>;

export default SortDownWideNarrow;
export { SortDownWideNarrow };

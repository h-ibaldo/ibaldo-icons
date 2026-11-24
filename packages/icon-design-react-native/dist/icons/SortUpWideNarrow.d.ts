import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SortUpWideNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SortUpWideNarrow: ForwardRefExoticComponent<SortUpWideNarrowProps & RefAttributes<Svg>>;

export default SortUpWideNarrow;
export { SortUpWideNarrow };

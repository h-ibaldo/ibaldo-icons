import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashArrowUpNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashArrowUpNarrow: ForwardRefExoticComponent<TrashArrowUpNarrowProps & RefAttributes<Svg>>;

export default TrashArrowUpNarrow;
export { TrashArrowUpNarrow };

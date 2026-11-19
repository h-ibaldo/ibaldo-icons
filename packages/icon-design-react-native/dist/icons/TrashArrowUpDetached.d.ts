import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashArrowUpDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashArrowUpDetached: ForwardRefExoticComponent<TrashArrowUpDetachedProps & RefAttributes<Svg>>;

export default TrashArrowUpDetached;
export { TrashArrowUpDetached };

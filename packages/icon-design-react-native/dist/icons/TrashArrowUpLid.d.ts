import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashArrowUpLidProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashArrowUpLid: ForwardRefExoticComponent<TrashArrowUpLidProps & RefAttributes<Svg>>;

export default TrashArrowUpLid;
export { TrashArrowUpLid };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashArrowUpNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashArrowUpNotch: ForwardRefExoticComponent<TrashArrowUpNotchProps & RefAttributes<Svg>>;

export default TrashArrowUpNotch;
export { TrashArrowUpNotch };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashRecycleNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashRecycleNotch: ForwardRefExoticComponent<TrashRecycleNotchProps & RefAttributes<Svg>>;

export default TrashRecycleNotch;
export { TrashRecycleNotch };

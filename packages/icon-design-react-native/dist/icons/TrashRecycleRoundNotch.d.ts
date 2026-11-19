import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashRecycleRoundNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashRecycleRoundNotch: ForwardRefExoticComponent<TrashRecycleRoundNotchProps & RefAttributes<Svg>>;

export default TrashRecycleRoundNotch;
export { TrashRecycleRoundNotch };

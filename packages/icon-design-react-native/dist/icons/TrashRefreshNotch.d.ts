import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashRefreshNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashRefreshNotch: ForwardRefExoticComponent<TrashRefreshNotchProps & RefAttributes<Svg>>;

export default TrashRefreshNotch;
export { TrashRefreshNotch };

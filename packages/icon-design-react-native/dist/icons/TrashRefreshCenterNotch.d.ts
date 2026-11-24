import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashRefreshCenterNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashRefreshCenterNotch: ForwardRefExoticComponent<TrashRefreshCenterNotchProps & RefAttributes<Svg>>;

export default TrashRefreshCenterNotch;
export { TrashRefreshCenterNotch };

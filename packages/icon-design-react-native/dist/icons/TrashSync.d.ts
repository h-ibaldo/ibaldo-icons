import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashSync: ForwardRefExoticComponent<TrashSyncProps & RefAttributes<Svg>>;

export default TrashSync;
export { TrashSync };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashRefreshDetachedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashRefreshDetached: ForwardRefExoticComponent<TrashRefreshDetachedProps & RefAttributes<Svg>>;

export default TrashRefreshDetached;
export { TrashRefreshDetached };

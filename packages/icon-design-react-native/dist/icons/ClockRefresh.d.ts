import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockRefresh: ForwardRefExoticComponent<ClockRefreshProps & RefAttributes<Svg>>;

export default ClockRefresh;
export { ClockRefresh };

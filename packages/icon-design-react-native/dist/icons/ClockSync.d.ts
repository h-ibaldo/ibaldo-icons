import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSync: ForwardRefExoticComponent<ClockSyncProps & RefAttributes<Svg>>;

export default ClockSync;
export { ClockSync };

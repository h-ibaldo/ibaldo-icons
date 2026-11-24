import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MonitorVolumeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MonitorVolume: ForwardRefExoticComponent<MonitorVolumeProps & RefAttributes<Svg>>;

export default MonitorVolume;
export { MonitorVolume };

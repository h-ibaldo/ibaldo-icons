import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VrHeadsetSensorsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VrHeadsetSensors: ForwardRefExoticComponent<VrHeadsetSensorsProps & RefAttributes<Svg>>;

export default VrHeadsetSensors;
export { VrHeadsetSensors };

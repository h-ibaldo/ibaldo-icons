import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VrHeadsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VrHeadset: ForwardRefExoticComponent<VrHeadsetProps & RefAttributes<Svg>>;

export default VrHeadset;
export { VrHeadset };

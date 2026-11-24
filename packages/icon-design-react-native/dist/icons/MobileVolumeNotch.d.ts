import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileVolumeNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileVolumeNotch: ForwardRefExoticComponent<MobileVolumeNotchProps & RefAttributes<Svg>>;

export default MobileVolumeNotch;
export { MobileVolumeNotch };

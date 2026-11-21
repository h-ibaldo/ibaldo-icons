import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileVolumeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileVolume: ForwardRefExoticComponent<MobileVolumeProps & RefAttributes<Svg>>;

export default MobileVolume;
export { MobileVolume };

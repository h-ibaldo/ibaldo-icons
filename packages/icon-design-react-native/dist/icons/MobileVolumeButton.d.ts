import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileVolumeButtonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileVolumeButton: ForwardRefExoticComponent<MobileVolumeButtonProps & RefAttributes<Svg>>;

export default MobileVolumeButton;
export { MobileVolumeButton };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceWavyBobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceWavyBob: ForwardRefExoticComponent<AvatarFaceWavyBobProps & RefAttributes<Svg>>;

export default AvatarFaceWavyBob;
export { AvatarFaceWavyBob };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceSidePartBobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSidePartBob: ForwardRefExoticComponent<AvatarFaceSidePartBobProps & RefAttributes<Svg>>;

export default AvatarFaceSidePartBob;
export { AvatarFaceSidePartBob };

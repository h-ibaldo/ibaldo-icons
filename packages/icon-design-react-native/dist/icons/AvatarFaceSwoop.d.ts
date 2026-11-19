import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceSwoopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSwoop: ForwardRefExoticComponent<AvatarFaceSwoopProps & RefAttributes<Svg>>;

export default AvatarFaceSwoop;
export { AvatarFaceSwoop };

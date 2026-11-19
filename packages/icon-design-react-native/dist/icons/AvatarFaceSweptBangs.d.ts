import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceSweptBangsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSweptBangs: ForwardRefExoticComponent<AvatarFaceSweptBangsProps & RefAttributes<Svg>>;

export default AvatarFaceSweptBangs;
export { AvatarFaceSweptBangs };

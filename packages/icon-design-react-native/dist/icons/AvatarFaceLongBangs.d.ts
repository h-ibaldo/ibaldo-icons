import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongBangsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongBangs: ForwardRefExoticComponent<AvatarFaceLongBangsProps & RefAttributes<Svg>>;

export default AvatarFaceLongBangs;
export { AvatarFaceLongBangs };

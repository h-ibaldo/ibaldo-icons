import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongSweptBangsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongSweptBangs: ForwardRefExoticComponent<AvatarFaceLongSweptBangsProps & RefAttributes<Svg>>;

export default AvatarFaceLongSweptBangs;
export { AvatarFaceLongSweptBangs };

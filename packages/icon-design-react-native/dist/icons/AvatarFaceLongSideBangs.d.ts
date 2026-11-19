import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongSideBangsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongSideBangs: ForwardRefExoticComponent<AvatarFaceLongSideBangsProps & RefAttributes<Svg>>;

export default AvatarFaceLongSideBangs;
export { AvatarFaceLongSideBangs };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongCenterPartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongCenterPart: ForwardRefExoticComponent<AvatarFaceLongCenterPartProps & RefAttributes<Svg>>;

export default AvatarFaceLongCenterPart;
export { AvatarFaceLongCenterPart };

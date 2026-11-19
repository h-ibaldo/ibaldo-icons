import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadLongCenterPartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadLongCenterPart: ForwardRefExoticComponent<AvatarHeadLongCenterPartProps & RefAttributes<Svg>>;

export default AvatarHeadLongCenterPart;
export { AvatarHeadLongCenterPart };

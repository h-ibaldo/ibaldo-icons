import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadShoulderCenterPartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadShoulderCenterPart: ForwardRefExoticComponent<AvatarHeadShoulderCenterPartProps & RefAttributes<Svg>>;

export default AvatarHeadShoulderCenterPart;
export { AvatarHeadShoulderCenterPart };

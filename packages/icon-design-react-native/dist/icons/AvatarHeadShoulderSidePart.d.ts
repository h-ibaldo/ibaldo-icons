import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadShoulderSidePartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadShoulderSidePart: ForwardRefExoticComponent<AvatarHeadShoulderSidePartProps & RefAttributes<Svg>>;

export default AvatarHeadShoulderSidePart;
export { AvatarHeadShoulderSidePart };

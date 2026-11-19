import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceRoundSidePartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceRoundSidePart: ForwardRefExoticComponent<AvatarFaceRoundSidePartProps & RefAttributes<Svg>>;

export default AvatarFaceRoundSidePart;
export { AvatarFaceRoundSidePart };

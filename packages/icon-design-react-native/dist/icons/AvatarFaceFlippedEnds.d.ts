import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceFlippedEndsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceFlippedEnds: ForwardRefExoticComponent<AvatarFaceFlippedEndsProps & RefAttributes<Svg>>;

export default AvatarFaceFlippedEnds;
export { AvatarFaceFlippedEnds };

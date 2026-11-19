import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadFlippedEndsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadFlippedEnds: ForwardRefExoticComponent<AvatarHeadFlippedEndsProps & RefAttributes<Svg>>;

export default AvatarHeadFlippedEnds;
export { AvatarHeadFlippedEnds };

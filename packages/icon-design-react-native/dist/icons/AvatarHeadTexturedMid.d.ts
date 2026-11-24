import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadTexturedMidProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadTexturedMid: ForwardRefExoticComponent<AvatarHeadTexturedMidProps & RefAttributes<Svg>>;

export default AvatarHeadTexturedMid;
export { AvatarHeadTexturedMid };

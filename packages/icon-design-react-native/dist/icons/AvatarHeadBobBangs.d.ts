import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadBobBangsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadBobBangs: ForwardRefExoticComponent<AvatarHeadBobBangsProps & RefAttributes<Svg>>;

export default AvatarHeadBobBangs;
export { AvatarHeadBobBangs };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadAfroProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadAfro: ForwardRefExoticComponent<AvatarHeadAfroProps & RefAttributes<Svg>>;

export default AvatarHeadAfro;
export { AvatarHeadAfro };

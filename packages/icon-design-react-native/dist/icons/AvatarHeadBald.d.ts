import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadBaldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadBald: ForwardRefExoticComponent<AvatarHeadBaldProps & RefAttributes<Svg>>;

export default AvatarHeadBald;
export { AvatarHeadBald };

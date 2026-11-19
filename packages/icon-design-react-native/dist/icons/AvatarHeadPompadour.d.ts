import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadPompadourProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadPompadour: ForwardRefExoticComponent<AvatarHeadPompadourProps & RefAttributes<Svg>>;

export default AvatarHeadPompadour;
export { AvatarHeadPompadour };

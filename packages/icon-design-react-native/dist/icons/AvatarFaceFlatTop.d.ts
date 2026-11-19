import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceFlatTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceFlatTop: ForwardRefExoticComponent<AvatarFaceFlatTopProps & RefAttributes<Svg>>;

export default AvatarFaceFlatTop;
export { AvatarFaceFlatTop };

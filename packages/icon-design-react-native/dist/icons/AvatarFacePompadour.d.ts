import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFacePompadourProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFacePompadour: ForwardRefExoticComponent<AvatarFacePompadourProps & RefAttributes<Svg>>;

export default AvatarFacePompadour;
export { AvatarFacePompadour };

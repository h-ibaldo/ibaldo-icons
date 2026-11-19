import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceAfroProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceAfro: ForwardRefExoticComponent<AvatarFaceAfroProps & RefAttributes<Svg>>;

export default AvatarFaceAfro;
export { AvatarFaceAfro };

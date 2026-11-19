import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceShortFringeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceShortFringe: ForwardRefExoticComponent<AvatarFaceShortFringeProps & RefAttributes<Svg>>;

export default AvatarFaceShortFringe;
export { AvatarFaceShortFringe };

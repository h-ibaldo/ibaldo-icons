import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceShortCombedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceShortCombed: ForwardRefExoticComponent<AvatarFaceShortCombedProps & RefAttributes<Svg>>;

export default AvatarFaceShortCombed;
export { AvatarFaceShortCombed };

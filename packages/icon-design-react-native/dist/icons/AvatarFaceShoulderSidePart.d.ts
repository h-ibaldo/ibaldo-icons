import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceShoulderSidePartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceShoulderSidePart: ForwardRefExoticComponent<AvatarFaceShoulderSidePartProps & RefAttributes<Svg>>;

export default AvatarFaceShoulderSidePart;
export { AvatarFaceShoulderSidePart };

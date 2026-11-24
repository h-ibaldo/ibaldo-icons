import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceTopKnotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceTopKnot: ForwardRefExoticComponent<AvatarFaceTopKnotProps & RefAttributes<Svg>>;

export default AvatarFaceTopKnot;
export { AvatarFaceTopKnot };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceTexturedMidProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceTexturedMid: ForwardRefExoticComponent<AvatarFaceTexturedMidProps & RefAttributes<Svg>>;

export default AvatarFaceTexturedMid;
export { AvatarFaceTexturedMid };

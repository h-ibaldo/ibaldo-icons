import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceTexturedPuffsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceTexturedPuffs: ForwardRefExoticComponent<AvatarFaceTexturedPuffsProps & RefAttributes<Svg>>;

export default AvatarFaceTexturedPuffs;
export { AvatarFaceTexturedPuffs };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceSpaceBunsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSpaceBuns: ForwardRefExoticComponent<AvatarFaceSpaceBunsProps & RefAttributes<Svg>>;

export default AvatarFaceSpaceBuns;
export { AvatarFaceSpaceBuns };

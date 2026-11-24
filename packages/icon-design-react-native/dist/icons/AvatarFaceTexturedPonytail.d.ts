import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceTexturedPonytailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceTexturedPonytail: ForwardRefExoticComponent<AvatarFaceTexturedPonytailProps & RefAttributes<Svg>>;

export default AvatarFaceTexturedPonytail;
export { AvatarFaceTexturedPonytail };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceTexturedShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceTexturedShort: ForwardRefExoticComponent<AvatarFaceTexturedShortProps & RefAttributes<Svg>>;

export default AvatarFaceTexturedShort;
export { AvatarFaceTexturedShort };

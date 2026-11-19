import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongTexturedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongTextured: ForwardRefExoticComponent<AvatarFaceLongTexturedProps & RefAttributes<Svg>>;

export default AvatarFaceLongTextured;
export { AvatarFaceLongTextured };

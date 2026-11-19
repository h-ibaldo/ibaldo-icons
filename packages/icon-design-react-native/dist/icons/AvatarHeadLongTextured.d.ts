import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadLongTexturedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadLongTextured: ForwardRefExoticComponent<AvatarHeadLongTexturedProps & RefAttributes<Svg>>;

export default AvatarHeadLongTextured;
export { AvatarHeadLongTextured };

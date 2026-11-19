import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadCurlyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadCurly: ForwardRefExoticComponent<AvatarHeadCurlyProps & RefAttributes<Svg>>;

export default AvatarHeadCurly;
export { AvatarHeadCurly };

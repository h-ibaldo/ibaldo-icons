import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadCurlyTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadCurlyTop: ForwardRefExoticComponent<AvatarHeadCurlyTopProps & RefAttributes<Svg>>;

export default AvatarHeadCurlyTop;
export { AvatarHeadCurlyTop };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceCurlyTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceCurlyTop: ForwardRefExoticComponent<AvatarFaceCurlyTopProps & RefAttributes<Svg>>;

export default AvatarFaceCurlyTop;
export { AvatarFaceCurlyTop };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceSideSweptShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSideSweptShort: ForwardRefExoticComponent<AvatarFaceSideSweptShortProps & RefAttributes<Svg>>;

export default AvatarFaceSideSweptShort;
export { AvatarFaceSideSweptShort };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongSidePartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongSidePart: ForwardRefExoticComponent<AvatarFaceLongSidePartProps & RefAttributes<Svg>>;

export default AvatarFaceLongSidePart;
export { AvatarFaceLongSidePart };

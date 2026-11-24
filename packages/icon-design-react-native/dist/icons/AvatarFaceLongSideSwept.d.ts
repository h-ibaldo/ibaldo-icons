import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongSideSweptProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongSideSwept: ForwardRefExoticComponent<AvatarFaceLongSideSweptProps & RefAttributes<Svg>>;

export default AvatarFaceLongSideSwept;
export { AvatarFaceLongSideSwept };

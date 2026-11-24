import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceSpikyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceSpiky: ForwardRefExoticComponent<AvatarFaceSpikyProps & RefAttributes<Svg>>;

export default AvatarFaceSpiky;
export { AvatarFaceSpiky };

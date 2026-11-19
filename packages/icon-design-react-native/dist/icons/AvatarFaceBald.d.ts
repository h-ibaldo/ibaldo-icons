import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceBaldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceBald: ForwardRefExoticComponent<AvatarFaceBaldProps & RefAttributes<Svg>>;

export default AvatarFaceBald;
export { AvatarFaceBald };

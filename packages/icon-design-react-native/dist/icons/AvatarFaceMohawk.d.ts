import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceMohawkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceMohawk: ForwardRefExoticComponent<AvatarFaceMohawkProps & RefAttributes<Svg>>;

export default AvatarFaceMohawk;
export { AvatarFaceMohawk };

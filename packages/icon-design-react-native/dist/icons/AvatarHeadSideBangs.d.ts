import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadSideBangsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSideBangs: ForwardRefExoticComponent<AvatarHeadSideBangsProps & RefAttributes<Svg>>;

export default AvatarHeadSideBangs;
export { AvatarHeadSideBangs };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadTexturedPuffsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadTexturedPuffs: ForwardRefExoticComponent<AvatarHeadTexturedPuffsProps & RefAttributes<Svg>>;

export default AvatarHeadTexturedPuffs;
export { AvatarHeadTexturedPuffs };

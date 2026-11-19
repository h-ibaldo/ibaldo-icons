import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadShortFringeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadShortFringe: ForwardRefExoticComponent<AvatarHeadShortFringeProps & RefAttributes<Svg>>;

export default AvatarHeadShortFringe;
export { AvatarHeadShortFringe };

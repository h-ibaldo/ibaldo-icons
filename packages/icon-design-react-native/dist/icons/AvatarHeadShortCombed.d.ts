import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadShortCombedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadShortCombed: ForwardRefExoticComponent<AvatarHeadShortCombedProps & RefAttributes<Svg>>;

export default AvatarHeadShortCombed;
export { AvatarHeadShortCombed };

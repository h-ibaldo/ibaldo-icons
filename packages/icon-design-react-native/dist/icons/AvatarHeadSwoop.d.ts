import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadSwoopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSwoop: ForwardRefExoticComponent<AvatarHeadSwoopProps & RefAttributes<Svg>>;

export default AvatarHeadSwoop;
export { AvatarHeadSwoop };

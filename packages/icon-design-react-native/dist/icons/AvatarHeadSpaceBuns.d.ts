import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadSpaceBunsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadSpaceBuns: ForwardRefExoticComponent<AvatarHeadSpaceBunsProps & RefAttributes<Svg>>;

export default AvatarHeadSpaceBuns;
export { AvatarHeadSpaceBuns };

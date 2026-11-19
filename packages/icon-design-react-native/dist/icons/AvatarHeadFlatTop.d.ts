import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarHeadFlatTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarHeadFlatTop: ForwardRefExoticComponent<AvatarHeadFlatTopProps & RefAttributes<Svg>>;

export default AvatarHeadFlatTop;
export { AvatarHeadFlatTop };

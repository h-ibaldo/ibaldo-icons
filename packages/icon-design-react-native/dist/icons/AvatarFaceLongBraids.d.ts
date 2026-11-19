import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AvatarFaceLongBraidsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AvatarFaceLongBraids: ForwardRefExoticComponent<AvatarFaceLongBraidsProps & RefAttributes<Svg>>;

export default AvatarFaceLongBraids;
export { AvatarFaceLongBraids };

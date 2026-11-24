import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileCartCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileCartCenter: ForwardRefExoticComponent<MobileCartCenterProps & RefAttributes<Svg>>;

export default MobileCartCenter;
export { MobileCartCenter };

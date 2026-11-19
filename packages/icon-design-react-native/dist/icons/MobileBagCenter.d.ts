import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileBagCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileBagCenter: ForwardRefExoticComponent<MobileBagCenterProps & RefAttributes<Svg>>;

export default MobileBagCenter;
export { MobileBagCenter };

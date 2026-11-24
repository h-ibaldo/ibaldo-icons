import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileCartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileCart: ForwardRefExoticComponent<MobileCartProps & RefAttributes<Svg>>;

export default MobileCart;
export { MobileCart };

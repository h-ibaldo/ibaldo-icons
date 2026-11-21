import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileUserNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileUserNotch: ForwardRefExoticComponent<MobileUserNotchProps & RefAttributes<Svg>>;

export default MobileUserNotch;
export { MobileUserNotch };

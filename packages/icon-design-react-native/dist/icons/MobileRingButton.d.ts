import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileRingButtonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileRingButton: ForwardRefExoticComponent<MobileRingButtonProps & RefAttributes<Svg>>;

export default MobileRingButton;
export { MobileRingButton };

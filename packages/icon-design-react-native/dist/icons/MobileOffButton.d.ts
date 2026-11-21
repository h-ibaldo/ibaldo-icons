import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileOffButtonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileOffButton: ForwardRefExoticComponent<MobileOffButtonProps & RefAttributes<Svg>>;

export default MobileOffButton;
export { MobileOffButton };

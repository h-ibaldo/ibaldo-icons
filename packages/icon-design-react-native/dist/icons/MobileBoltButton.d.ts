import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileBoltButtonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileBoltButton: ForwardRefExoticComponent<MobileBoltButtonProps & RefAttributes<Svg>>;

export default MobileBoltButton;
export { MobileBoltButton };

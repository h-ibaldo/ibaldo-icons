import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobilePowerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobilePower: ForwardRefExoticComponent<MobilePowerProps & RefAttributes<Svg>>;

export default MobilePower;
export { MobilePower };

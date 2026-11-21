import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobilePowerNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobilePowerNotch: ForwardRefExoticComponent<MobilePowerNotchProps & RefAttributes<Svg>>;

export default MobilePowerNotch;
export { MobilePowerNotch };

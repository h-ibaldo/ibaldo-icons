import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileOff: ForwardRefExoticComponent<MobileOffProps & RefAttributes<Svg>>;

export default MobileOff;
export { MobileOff };

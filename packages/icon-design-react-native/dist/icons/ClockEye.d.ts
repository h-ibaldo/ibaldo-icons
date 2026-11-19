import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockEyeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockEye: ForwardRefExoticComponent<ClockEyeProps & RefAttributes<Svg>>;

export default ClockEye;
export { ClockEye };

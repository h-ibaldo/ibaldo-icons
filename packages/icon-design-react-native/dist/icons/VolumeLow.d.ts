import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeLowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeLow: ForwardRefExoticComponent<VolumeLowProps & RefAttributes<Svg>>;

export default VolumeLow;
export { VolumeLow };

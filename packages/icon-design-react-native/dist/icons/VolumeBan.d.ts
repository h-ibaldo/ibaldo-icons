import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeBan: ForwardRefExoticComponent<VolumeBanProps & RefAttributes<Svg>>;

export default VolumeBan;
export { VolumeBan };

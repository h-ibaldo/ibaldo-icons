import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeMediumProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeMedium: ForwardRefExoticComponent<VolumeMediumProps & RefAttributes<Svg>>;

export default VolumeMedium;
export { VolumeMedium };

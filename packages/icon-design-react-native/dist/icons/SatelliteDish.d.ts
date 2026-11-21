import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SatelliteDishProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SatelliteDish: ForwardRefExoticComponent<SatelliteDishProps & RefAttributes<Svg>>;

export default SatelliteDish;
export { SatelliteDish };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AntennaProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Antenna: ForwardRefExoticComponent<AntennaProps & RefAttributes<Svg>>;

export default Antenna;
export { Antenna };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AirplayProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Airplay: ForwardRefExoticComponent<AirplayProps & RefAttributes<Svg>>;

export default Airplay;
export { Airplay };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AirplaySignalCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AirplaySignalCircle: ForwardRefExoticComponent<AirplaySignalCircleProps & RefAttributes<Svg>>;

export default AirplaySignalCircle;
export { AirplaySignalCircle };

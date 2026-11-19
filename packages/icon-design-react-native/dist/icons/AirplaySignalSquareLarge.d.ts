import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AirplaySignalSquareLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AirplaySignalSquareLarge: ForwardRefExoticComponent<AirplaySignalSquareLargeProps & RefAttributes<Svg>>;

export default AirplaySignalSquareLarge;
export { AirplaySignalSquareLarge };

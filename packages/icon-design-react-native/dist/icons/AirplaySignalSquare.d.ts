import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AirplaySignalSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AirplaySignalSquare: ForwardRefExoticComponent<AirplaySignalSquareProps & RefAttributes<Svg>>;

export default AirplaySignalSquare;
export { AirplaySignalSquare };

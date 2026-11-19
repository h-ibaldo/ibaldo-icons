import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassStandSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassStandSquare: ForwardRefExoticComponent<HourglassStandSquareProps & RefAttributes<Svg>>;

export default HourglassStandSquare;
export { HourglassStandSquare };

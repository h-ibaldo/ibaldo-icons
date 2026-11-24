import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AsteriskFiveSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AsteriskFiveSquare: ForwardRefExoticComponent<AsteriskFiveSquareProps & RefAttributes<Svg>>;

export default AsteriskFiveSquare;
export { AsteriskFiveSquare };

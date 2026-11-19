import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassSquareOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassSquareOff: ForwardRefExoticComponent<CompassSquareOffProps & RefAttributes<Svg>>;

export default CompassSquareOff;
export { CompassSquareOff };

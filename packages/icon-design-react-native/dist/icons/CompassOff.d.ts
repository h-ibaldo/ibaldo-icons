import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassOff: ForwardRefExoticComponent<CompassOffProps & RefAttributes<Svg>>;

export default CompassOff;
export { CompassOff };

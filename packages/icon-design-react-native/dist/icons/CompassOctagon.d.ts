import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassOctagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassOctagon: ForwardRefExoticComponent<CompassOctagonProps & RefAttributes<Svg>>;

export default CompassOctagon;
export { CompassOctagon };

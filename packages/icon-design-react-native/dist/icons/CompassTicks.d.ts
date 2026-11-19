import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CompassTicksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CompassTicks: ForwardRefExoticComponent<CompassTicksProps & RefAttributes<Svg>>;

export default CompassTicks;
export { CompassTicks };

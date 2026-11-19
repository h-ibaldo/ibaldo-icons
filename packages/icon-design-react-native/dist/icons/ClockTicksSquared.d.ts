import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockTicksSquaredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockTicksSquared: ForwardRefExoticComponent<ClockTicksSquaredProps & RefAttributes<Svg>>;

export default ClockTicksSquared;
export { ClockTicksSquared };

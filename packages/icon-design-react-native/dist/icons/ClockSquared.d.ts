import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSquaredProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSquared: ForwardRefExoticComponent<ClockSquaredProps & RefAttributes<Svg>>;

export default ClockSquared;
export { ClockSquared };

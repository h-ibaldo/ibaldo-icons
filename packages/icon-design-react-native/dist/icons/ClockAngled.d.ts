import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockAngled: ForwardRefExoticComponent<ClockAngledProps & RefAttributes<Svg>>;

export default ClockAngled;
export { ClockAngled };

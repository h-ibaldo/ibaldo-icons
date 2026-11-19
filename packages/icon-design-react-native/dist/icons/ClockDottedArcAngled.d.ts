import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockDottedArcAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockDottedArcAngled: ForwardRefExoticComponent<ClockDottedArcAngledProps & RefAttributes<Svg>>;

export default ClockDottedArcAngled;
export { ClockDottedArcAngled };

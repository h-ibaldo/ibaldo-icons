import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockFastAngledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockFastAngled: ForwardRefExoticComponent<ClockFastAngledProps & RefAttributes<Svg>>;

export default ClockFastAngled;
export { ClockFastAngled };

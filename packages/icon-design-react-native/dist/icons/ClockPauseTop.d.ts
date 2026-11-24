import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockPauseTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockPauseTop: ForwardRefExoticComponent<ClockPauseTopProps & RefAttributes<Svg>>;

export default ClockPauseTop;
export { ClockPauseTop };

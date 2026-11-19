import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockPlus: ForwardRefExoticComponent<ClockPlusProps & RefAttributes<Svg>>;

export default ClockPlus;
export { ClockPlus };

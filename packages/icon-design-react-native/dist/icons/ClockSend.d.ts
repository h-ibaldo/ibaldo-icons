import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockSendProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockSend: ForwardRefExoticComponent<ClockSendProps & RefAttributes<Svg>>;

export default ClockSend;
export { ClockSend };

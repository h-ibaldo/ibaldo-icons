import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketSlim: ForwardRefExoticComponent<TicketSlimProps & RefAttributes<Svg>>;

export default TicketSlim;
export { TicketSlim };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketXSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketXSlim: ForwardRefExoticComponent<TicketXSlimProps & RefAttributes<Svg>>;

export default TicketXSlim;
export { TicketXSlim };

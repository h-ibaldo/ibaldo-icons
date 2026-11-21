import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketX: ForwardRefExoticComponent<TicketXProps & RefAttributes<Svg>>;

export default TicketX;
export { TicketX };

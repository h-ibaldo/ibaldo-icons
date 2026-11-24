import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketPlusSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketPlusSlim: ForwardRefExoticComponent<TicketPlusSlimProps & RefAttributes<Svg>>;

export default TicketPlusSlim;
export { TicketPlusSlim };

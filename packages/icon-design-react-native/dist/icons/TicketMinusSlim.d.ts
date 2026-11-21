import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketMinusSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketMinusSlim: ForwardRefExoticComponent<TicketMinusSlimProps & RefAttributes<Svg>>;

export default TicketMinusSlim;
export { TicketMinusSlim };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketCheck: ForwardRefExoticComponent<TicketCheckProps & RefAttributes<Svg>>;

export default TicketCheck;
export { TicketCheck };

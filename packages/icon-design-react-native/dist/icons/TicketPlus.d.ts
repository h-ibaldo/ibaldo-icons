import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketPlus: ForwardRefExoticComponent<TicketPlusProps & RefAttributes<Svg>>;

export default TicketPlus;
export { TicketPlus };

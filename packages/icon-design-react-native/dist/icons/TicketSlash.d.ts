import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketSlashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketSlash: ForwardRefExoticComponent<TicketSlashProps & RefAttributes<Svg>>;

export default TicketSlash;
export { TicketSlash };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketSlashTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketSlashTall: ForwardRefExoticComponent<TicketSlashTallProps & RefAttributes<Svg>>;

export default TicketSlashTall;
export { TicketSlashTall };

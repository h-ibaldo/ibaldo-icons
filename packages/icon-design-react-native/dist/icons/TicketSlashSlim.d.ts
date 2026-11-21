import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TicketSlashSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TicketSlashSlim: ForwardRefExoticComponent<TicketSlashSlimProps & RefAttributes<Svg>>;

export default TicketSlashSlim;
export { TicketSlashSlim };

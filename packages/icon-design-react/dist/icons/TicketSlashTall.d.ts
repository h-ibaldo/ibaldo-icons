import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketSlashTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketSlashTall: ForwardRefExoticComponent<TicketSlashTallProps & RefAttributes<SVGSVGElement>>;

export default TicketSlashTall;
export { TicketSlashTall };

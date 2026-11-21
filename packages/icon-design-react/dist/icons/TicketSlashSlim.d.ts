import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketSlashSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketSlashSlim: ForwardRefExoticComponent<TicketSlashSlimProps & RefAttributes<SVGSVGElement>>;

export default TicketSlashSlim;
export { TicketSlashSlim };

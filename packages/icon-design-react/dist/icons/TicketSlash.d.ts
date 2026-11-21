import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketSlash: ForwardRefExoticComponent<TicketSlashProps & RefAttributes<SVGSVGElement>>;

export default TicketSlash;
export { TicketSlash };

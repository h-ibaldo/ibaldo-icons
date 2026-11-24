import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketSlim: ForwardRefExoticComponent<TicketSlimProps & RefAttributes<SVGSVGElement>>;

export default TicketSlim;
export { TicketSlim };

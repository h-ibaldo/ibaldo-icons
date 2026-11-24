import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPlusSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPlusSlim: ForwardRefExoticComponent<TicketPlusSlimProps & RefAttributes<SVGSVGElement>>;

export default TicketPlusSlim;
export { TicketPlusSlim };

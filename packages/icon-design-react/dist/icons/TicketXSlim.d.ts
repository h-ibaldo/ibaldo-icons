import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketXSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketXSlim: ForwardRefExoticComponent<TicketXSlimProps & RefAttributes<SVGSVGElement>>;

export default TicketXSlim;
export { TicketXSlim };

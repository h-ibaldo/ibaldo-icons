import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketStackSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketStackSlim: ForwardRefExoticComponent<TicketStackSlimProps & RefAttributes<SVGSVGElement>>;

export default TicketStackSlim;
export { TicketStackSlim };

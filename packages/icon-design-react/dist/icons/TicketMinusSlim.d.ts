import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketMinusSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketMinusSlim: ForwardRefExoticComponent<TicketMinusSlimProps & RefAttributes<SVGSVGElement>>;

export default TicketMinusSlim;
export { TicketMinusSlim };

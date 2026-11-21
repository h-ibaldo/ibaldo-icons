import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketX: ForwardRefExoticComponent<TicketXProps & RefAttributes<SVGSVGElement>>;

export default TicketX;
export { TicketX };

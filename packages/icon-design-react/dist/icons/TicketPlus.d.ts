import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPlus: ForwardRefExoticComponent<TicketPlusProps & RefAttributes<SVGSVGElement>>;

export default TicketPlus;
export { TicketPlus };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketCheck: ForwardRefExoticComponent<TicketCheckProps & RefAttributes<SVGSVGElement>>;

export default TicketCheck;
export { TicketCheck };

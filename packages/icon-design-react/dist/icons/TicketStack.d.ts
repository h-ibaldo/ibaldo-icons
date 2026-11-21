import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketStack: ForwardRefExoticComponent<TicketStackProps & RefAttributes<SVGSVGElement>>;

export default TicketStack;
export { TicketStack };

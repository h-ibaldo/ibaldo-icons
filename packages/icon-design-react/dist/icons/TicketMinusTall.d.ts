import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketMinusTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketMinusTall: ForwardRefExoticComponent<TicketMinusTallProps & RefAttributes<SVGSVGElement>>;

export default TicketMinusTall;
export { TicketMinusTall };

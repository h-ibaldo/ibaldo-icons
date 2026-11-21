import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPlusTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPlusTall: ForwardRefExoticComponent<TicketPlusTallProps & RefAttributes<SVGSVGElement>>;

export default TicketPlusTall;
export { TicketPlusTall };

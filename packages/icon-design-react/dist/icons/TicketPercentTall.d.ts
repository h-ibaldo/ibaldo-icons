import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPercentTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPercentTall: ForwardRefExoticComponent<TicketPercentTallProps & RefAttributes<SVGSVGElement>>;

export default TicketPercentTall;
export { TicketPercentTall };

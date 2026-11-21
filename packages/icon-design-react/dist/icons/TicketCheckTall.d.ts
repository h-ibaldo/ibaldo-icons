import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketCheckTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketCheckTall: ForwardRefExoticComponent<TicketCheckTallProps & RefAttributes<SVGSVGElement>>;

export default TicketCheckTall;
export { TicketCheckTall };

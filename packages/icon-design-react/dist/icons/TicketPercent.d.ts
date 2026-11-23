import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPercentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPercent: ForwardRefExoticComponent<TicketPercentProps & RefAttributes<SVGSVGElement>>;

export default TicketPercent;
export { TicketPercent };

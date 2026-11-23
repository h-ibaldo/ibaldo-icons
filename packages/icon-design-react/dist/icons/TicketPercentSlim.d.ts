import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPercentSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPercentSlim: ForwardRefExoticComponent<TicketPercentSlimProps & RefAttributes<SVGSVGElement>>;

export default TicketPercentSlim;
export { TicketPercentSlim };

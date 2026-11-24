import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketScallopedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketScalloped: ForwardRefExoticComponent<TicketScallopedProps & RefAttributes<SVGSVGElement>>;

export default TicketScalloped;
export { TicketScalloped };

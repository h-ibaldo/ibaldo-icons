import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketVertical: ForwardRefExoticComponent<TicketVerticalProps & RefAttributes<SVGSVGElement>>;

export default TicketVertical;
export { TicketVertical };

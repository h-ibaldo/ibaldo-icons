import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketXTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketXTilted: ForwardRefExoticComponent<TicketXTiltedProps & RefAttributes<SVGSVGElement>>;

export default TicketXTilted;
export { TicketXTilted };

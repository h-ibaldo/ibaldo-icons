import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketTilted: ForwardRefExoticComponent<TicketTiltedProps & RefAttributes<SVGSVGElement>>;

export default TicketTilted;
export { TicketTilted };

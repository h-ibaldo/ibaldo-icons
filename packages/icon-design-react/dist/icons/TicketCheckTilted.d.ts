import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketCheckTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketCheckTilted: ForwardRefExoticComponent<TicketCheckTiltedProps & RefAttributes<SVGSVGElement>>;

export default TicketCheckTilted;
export { TicketCheckTilted };

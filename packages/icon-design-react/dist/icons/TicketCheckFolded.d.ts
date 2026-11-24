import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketCheckFoldedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketCheckFolded: ForwardRefExoticComponent<TicketCheckFoldedProps & RefAttributes<SVGSVGElement>>;

export default TicketCheckFolded;
export { TicketCheckFolded };

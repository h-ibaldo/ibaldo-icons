import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketFoldedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketFolded: ForwardRefExoticComponent<TicketFoldedProps & RefAttributes<SVGSVGElement>>;

export default TicketFolded;
export { TicketFolded };

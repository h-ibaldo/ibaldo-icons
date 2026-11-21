import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketMinusSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketMinusSide: ForwardRefExoticComponent<TicketMinusSideProps & RefAttributes<SVGSVGElement>>;

export default TicketMinusSide;
export { TicketMinusSide };

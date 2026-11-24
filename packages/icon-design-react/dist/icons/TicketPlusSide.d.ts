import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPlusSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPlusSide: ForwardRefExoticComponent<TicketPlusSideProps & RefAttributes<SVGSVGElement>>;

export default TicketPlusSide;
export { TicketPlusSide };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketXSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketXSide: ForwardRefExoticComponent<TicketXSideProps & RefAttributes<SVGSVGElement>>;

export default TicketXSide;
export { TicketXSide };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketPercentSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketPercentSide: ForwardRefExoticComponent<TicketPercentSideProps & RefAttributes<SVGSVGElement>>;

export default TicketPercentSide;
export { TicketPercentSide };

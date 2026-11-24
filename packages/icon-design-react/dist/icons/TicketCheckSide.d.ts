import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketCheckSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketCheckSide: ForwardRefExoticComponent<TicketCheckSideProps & RefAttributes<SVGSVGElement>>;

export default TicketCheckSide;
export { TicketCheckSide };

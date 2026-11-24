import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketStubSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketStubSide: ForwardRefExoticComponent<TicketStubSideProps & RefAttributes<SVGSVGElement>>;

export default TicketStubSide;
export { TicketStubSide };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketStubProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketStub: ForwardRefExoticComponent<TicketStubProps & RefAttributes<SVGSVGElement>>;

export default TicketStub;
export { TicketStub };

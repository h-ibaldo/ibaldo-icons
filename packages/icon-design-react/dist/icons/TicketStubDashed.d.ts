import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketStubDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketStubDashed: ForwardRefExoticComponent<TicketStubDashedProps & RefAttributes<SVGSVGElement>>;

export default TicketStubDashed;
export { TicketStubDashed };

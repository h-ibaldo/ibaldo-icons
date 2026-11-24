import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketStubDashedSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketStubDashedSide: ForwardRefExoticComponent<TicketStubDashedSideProps & RefAttributes<SVGSVGElement>>;

export default TicketStubDashedSide;
export { TicketStubDashedSide };

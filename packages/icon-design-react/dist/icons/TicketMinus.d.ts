import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TicketMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TicketMinus: ForwardRefExoticComponent<TicketMinusProps & RefAttributes<SVGSVGElement>>;

export default TicketMinus;
export { TicketMinus };

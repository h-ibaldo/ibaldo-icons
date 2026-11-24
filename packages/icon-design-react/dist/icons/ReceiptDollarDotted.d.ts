import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptDollarDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptDollarDotted: ForwardRefExoticComponent<ReceiptDollarDottedProps & RefAttributes<SVGSVGElement>>;

export default ReceiptDollarDotted;
export { ReceiptDollarDotted };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptDollarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptDollar: ForwardRefExoticComponent<ReceiptDollarProps & RefAttributes<SVGSVGElement>>;

export default ReceiptDollar;
export { ReceiptDollar };

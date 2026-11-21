import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptDollarWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptDollarWavy: ForwardRefExoticComponent<ReceiptDollarWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptDollarWavy;
export { ReceiptDollarWavy };

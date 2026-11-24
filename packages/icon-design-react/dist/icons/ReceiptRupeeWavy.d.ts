import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptRupeeWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptRupeeWavy: ForwardRefExoticComponent<ReceiptRupeeWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptRupeeWavy;
export { ReceiptRupeeWavy };

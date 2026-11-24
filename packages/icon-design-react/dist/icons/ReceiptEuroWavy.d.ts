import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptEuroWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptEuroWavy: ForwardRefExoticComponent<ReceiptEuroWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptEuroWavy;
export { ReceiptEuroWavy };

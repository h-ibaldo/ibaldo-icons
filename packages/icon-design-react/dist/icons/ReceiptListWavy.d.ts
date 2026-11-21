import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptListWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptListWavy: ForwardRefExoticComponent<ReceiptListWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptListWavy;
export { ReceiptListWavy };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptPoundWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptPoundWavy: ForwardRefExoticComponent<ReceiptPoundWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptPoundWavy;
export { ReceiptPoundWavy };

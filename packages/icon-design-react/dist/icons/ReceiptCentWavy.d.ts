import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptCentWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptCentWavy: ForwardRefExoticComponent<ReceiptCentWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptCentWavy;
export { ReceiptCentWavy };

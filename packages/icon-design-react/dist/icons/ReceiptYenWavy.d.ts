import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptYenWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptYenWavy: ForwardRefExoticComponent<ReceiptYenWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptYenWavy;
export { ReceiptYenWavy };

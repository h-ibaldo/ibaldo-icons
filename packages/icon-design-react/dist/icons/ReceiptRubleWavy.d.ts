import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptRubleWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptRubleWavy: ForwardRefExoticComponent<ReceiptRubleWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptRubleWavy;
export { ReceiptRubleWavy };

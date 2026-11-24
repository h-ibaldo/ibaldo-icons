import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptFrancWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptFrancWavy: ForwardRefExoticComponent<ReceiptFrancWavyProps & RefAttributes<SVGSVGElement>>;

export default ReceiptFrancWavy;
export { ReceiptFrancWavy };

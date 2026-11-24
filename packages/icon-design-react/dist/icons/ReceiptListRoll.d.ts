import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptListRollProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptListRoll: ForwardRefExoticComponent<ReceiptListRollProps & RefAttributes<SVGSVGElement>>;

export default ReceiptListRoll;
export { ReceiptListRoll };

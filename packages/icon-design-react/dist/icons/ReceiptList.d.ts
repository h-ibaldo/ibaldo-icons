import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReceiptListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReceiptList: ForwardRefExoticComponent<ReceiptListProps & RefAttributes<SVGSVGElement>>;

export default ReceiptList;
export { ReceiptList };

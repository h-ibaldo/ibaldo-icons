import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaidSearchLupeDollarSignProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaidSearchLupeDollarSign: ForwardRefExoticComponent<PaidSearchLupeDollarSignProps & RefAttributes<SVGSVGElement>>;

export default PaidSearchLupeDollarSign;
export { PaidSearchLupeDollarSign };

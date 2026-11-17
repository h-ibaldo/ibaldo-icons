import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXCircleDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXCircleDash: ForwardRefExoticComponent<BellXCircleDashProps & RefAttributes<SVGSVGElement>>;

export default BellXCircleDash;
export { BellXCircleDash };

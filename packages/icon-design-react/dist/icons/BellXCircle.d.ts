import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXCircle: ForwardRefExoticComponent<BellXCircleProps & RefAttributes<SVGSVGElement>>;

export default BellXCircle;
export { BellXCircle };

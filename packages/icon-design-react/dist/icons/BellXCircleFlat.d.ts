import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXCircleFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellXCircleFlat: ForwardRefExoticComponent<BellXCircleFlatProps & RefAttributes<SVGSVGElement>>;

export default BellXCircleFlat;
export { BellXCircleFlat };

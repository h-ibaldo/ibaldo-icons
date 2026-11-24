import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownArcSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownArcSmall: ForwardRefExoticComponent<ArrowDownArcSmallProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownArcSmall;
export { ArrowDownArcSmall };

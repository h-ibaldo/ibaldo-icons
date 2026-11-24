import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftNarrow: ForwardRefExoticComponent<ArrowLeftNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftNarrow;
export { ArrowLeftNarrow };

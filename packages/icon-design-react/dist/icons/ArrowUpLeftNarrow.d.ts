import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftNarrow: ForwardRefExoticComponent<ArrowUpLeftNarrowProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftNarrow;
export { ArrowUpLeftNarrow };

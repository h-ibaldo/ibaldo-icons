import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SortUpWideNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SortUpWideNarrow: ForwardRefExoticComponent<SortUpWideNarrowProps & RefAttributes<SVGSVGElement>>;

export default SortUpWideNarrow;
export { SortUpWideNarrow };

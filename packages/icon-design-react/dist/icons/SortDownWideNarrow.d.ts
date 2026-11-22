import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SortDownWideNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SortDownWideNarrow: ForwardRefExoticComponent<SortDownWideNarrowProps & RefAttributes<SVGSVGElement>>;

export default SortDownWideNarrow;
export { SortDownWideNarrow };

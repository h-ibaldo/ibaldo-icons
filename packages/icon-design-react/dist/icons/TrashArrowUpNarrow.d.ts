import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowUpNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowUpNarrow: ForwardRefExoticComponent<TrashArrowUpNarrowProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowUpNarrow;
export { TrashArrowUpNarrow };

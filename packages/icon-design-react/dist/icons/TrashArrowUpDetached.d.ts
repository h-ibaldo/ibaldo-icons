import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowUpDetachedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowUpDetached: ForwardRefExoticComponent<TrashArrowUpDetachedProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowUpDetached;
export { TrashArrowUpDetached };

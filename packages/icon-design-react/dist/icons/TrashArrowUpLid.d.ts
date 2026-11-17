import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowUpLidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowUpLid: ForwardRefExoticComponent<TrashArrowUpLidProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowUpLid;
export { TrashArrowUpLid };

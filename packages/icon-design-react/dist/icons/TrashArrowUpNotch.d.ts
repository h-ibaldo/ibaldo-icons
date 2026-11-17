import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashArrowUpNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashArrowUpNotch: ForwardRefExoticComponent<TrashArrowUpNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashArrowUpNotch;
export { TrashArrowUpNotch };

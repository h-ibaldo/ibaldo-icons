import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashEmptyPeakProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashEmptyPeak: ForwardRefExoticComponent<TrashEmptyPeakProps & RefAttributes<SVGSVGElement>>;

export default TrashEmptyPeak;
export { TrashEmptyPeak };

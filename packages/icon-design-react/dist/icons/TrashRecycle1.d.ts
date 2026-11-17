import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRecycle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRecycle1: ForwardRefExoticComponent<TrashRecycle1Props & RefAttributes<SVGSVGElement>>;

export default TrashRecycle1;
export { TrashRecycle1 };

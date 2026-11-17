import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRecycle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRecycle2: ForwardRefExoticComponent<TrashRecycle2Props & RefAttributes<SVGSVGElement>>;

export default TrashRecycle2;
export { TrashRecycle2 };

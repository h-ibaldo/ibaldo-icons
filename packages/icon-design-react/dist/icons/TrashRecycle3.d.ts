import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRecycle3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRecycle3: ForwardRefExoticComponent<TrashRecycle3Props & RefAttributes<SVGSVGElement>>;

export default TrashRecycle3;
export { TrashRecycle3 };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRecycleNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRecycleNotch: ForwardRefExoticComponent<TrashRecycleNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashRecycleNotch;
export { TrashRecycleNotch };

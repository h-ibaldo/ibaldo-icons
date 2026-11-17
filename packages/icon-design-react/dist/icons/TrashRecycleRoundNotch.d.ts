import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashRecycleRoundNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashRecycleRoundNotch: ForwardRefExoticComponent<TrashRecycleRoundNotchProps & RefAttributes<SVGSVGElement>>;

export default TrashRecycleRoundNotch;
export { TrashRecycleRoundNotch };

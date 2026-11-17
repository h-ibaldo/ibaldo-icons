import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncCircleHookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncCircleHook: ForwardRefExoticComponent<ArrowSyncCircleHookProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncCircleHook;
export { ArrowSyncCircleHook };

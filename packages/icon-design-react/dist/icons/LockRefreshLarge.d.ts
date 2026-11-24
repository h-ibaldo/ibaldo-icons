import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockRefreshLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockRefreshLarge: ForwardRefExoticComponent<LockRefreshLargeProps & RefAttributes<SVGSVGElement>>;

export default LockRefreshLarge;
export { LockRefreshLarge };

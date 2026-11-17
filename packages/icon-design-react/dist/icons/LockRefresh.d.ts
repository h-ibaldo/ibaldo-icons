import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockRefresh: ForwardRefExoticComponent<LockRefreshProps & RefAttributes<SVGSVGElement>>;

export default LockRefresh;
export { LockRefresh };

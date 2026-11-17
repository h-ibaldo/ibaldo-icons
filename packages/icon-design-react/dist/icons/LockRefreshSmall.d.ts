import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockRefreshSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockRefreshSmall: ForwardRefExoticComponent<LockRefreshSmallProps & RefAttributes<SVGSVGElement>>;

export default LockRefreshSmall;
export { LockRefreshSmall };

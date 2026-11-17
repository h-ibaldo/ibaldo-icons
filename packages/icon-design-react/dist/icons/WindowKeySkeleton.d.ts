import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeySkeletonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKeySkeleton: ForwardRefExoticComponent<WindowKeySkeletonProps & RefAttributes<SVGSVGElement>>;

export default WindowKeySkeleton;
export { WindowKeySkeleton };

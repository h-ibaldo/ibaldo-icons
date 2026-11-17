import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowKeySkeletonBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowKeySkeletonBare: ForwardRefExoticComponent<WindowKeySkeletonBareProps & RefAttributes<SVGSVGElement>>;

export default WindowKeySkeletonBare;
export { WindowKeySkeletonBare };

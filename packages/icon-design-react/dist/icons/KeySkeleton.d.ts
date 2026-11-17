import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeySkeletonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeySkeleton: ForwardRefExoticComponent<KeySkeletonProps & RefAttributes<SVGSVGElement>>;

export default KeySkeleton;
export { KeySkeleton };

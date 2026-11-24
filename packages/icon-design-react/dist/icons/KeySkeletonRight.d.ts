import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeySkeletonRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeySkeletonRight: ForwardRefExoticComponent<KeySkeletonRightProps & RefAttributes<SVGSVGElement>>;

export default KeySkeletonRight;
export { KeySkeletonRight };

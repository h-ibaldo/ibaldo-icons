import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeySkeletonRightOvalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeySkeletonRightOval: ForwardRefExoticComponent<KeySkeletonRightOvalProps & RefAttributes<SVGSVGElement>>;

export default KeySkeletonRightOval;
export { KeySkeletonRightOval };

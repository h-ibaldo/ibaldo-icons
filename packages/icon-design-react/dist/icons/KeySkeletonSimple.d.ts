import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeySkeletonSimpleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeySkeletonSimple: ForwardRefExoticComponent<KeySkeletonSimpleProps & RefAttributes<SVGSVGElement>>;

export default KeySkeletonSimple;
export { KeySkeletonSimple };

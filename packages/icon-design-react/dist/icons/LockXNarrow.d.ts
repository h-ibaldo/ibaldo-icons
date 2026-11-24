import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockXNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockXNarrow: ForwardRefExoticComponent<LockXNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockXNarrow;
export { LockXNarrow };

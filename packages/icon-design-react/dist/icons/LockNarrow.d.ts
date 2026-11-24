import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockNarrow: ForwardRefExoticComponent<LockNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockNarrow;
export { LockNarrow };

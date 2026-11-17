import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockDotsNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockDotsNarrow: ForwardRefExoticComponent<LockDotsNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockDotsNarrow;
export { LockDotsNarrow };

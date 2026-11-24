import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCheckCornerNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCheckCornerNarrow: ForwardRefExoticComponent<LockCheckCornerNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockCheckCornerNarrow;
export { LockCheckCornerNarrow };

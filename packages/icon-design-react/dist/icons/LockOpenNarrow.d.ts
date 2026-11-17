import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenNarrow: ForwardRefExoticComponent<LockOpenNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockOpenNarrow;
export { LockOpenNarrow };

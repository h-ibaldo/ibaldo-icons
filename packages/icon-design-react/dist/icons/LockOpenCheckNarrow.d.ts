import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenCheckNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenCheckNarrow: ForwardRefExoticComponent<LockOpenCheckNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockOpenCheckNarrow;
export { LockOpenCheckNarrow };

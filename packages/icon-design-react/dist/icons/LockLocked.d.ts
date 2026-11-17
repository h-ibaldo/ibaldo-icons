import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockLockedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockLocked: ForwardRefExoticComponent<LockLockedProps & RefAttributes<SVGSVGElement>>;

export default LockLocked;
export { LockLocked };

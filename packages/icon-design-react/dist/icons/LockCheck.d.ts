import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCheck: ForwardRefExoticComponent<LockCheckProps & RefAttributes<SVGSVGElement>>;

export default LockCheck;
export { LockCheck };

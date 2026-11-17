import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockX: ForwardRefExoticComponent<LockXProps & RefAttributes<SVGSVGElement>>;

export default LockX;
export { LockX };

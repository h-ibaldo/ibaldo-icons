import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockClose: ForwardRefExoticComponent<LockCloseProps & RefAttributes<SVGSVGElement>>;

export default LockClose;
export { LockClose };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenCheck: ForwardRefExoticComponent<LockOpenCheckProps & RefAttributes<SVGSVGElement>>;

export default LockOpenCheck;
export { LockOpenCheck };

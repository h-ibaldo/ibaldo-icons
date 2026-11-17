import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockPasswordProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockPassword: ForwardRefExoticComponent<LockPasswordProps & RefAttributes<SVGSVGElement>>;

export default LockPassword;
export { LockPassword };

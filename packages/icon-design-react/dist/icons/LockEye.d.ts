import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEye: ForwardRefExoticComponent<LockEyeProps & RefAttributes<SVGSVGElement>>;

export default LockEye;
export { LockEye };

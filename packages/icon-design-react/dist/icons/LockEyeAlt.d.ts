import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyeAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEyeAlt: ForwardRefExoticComponent<LockEyeAltProps & RefAttributes<SVGSVGElement>>;

export default LockEyeAlt;
export { LockEyeAlt };

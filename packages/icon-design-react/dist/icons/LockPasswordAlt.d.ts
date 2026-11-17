import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockPasswordAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockPasswordAlt: ForwardRefExoticComponent<LockPasswordAltProps & RefAttributes<SVGSVGElement>>;

export default LockPasswordAlt;
export { LockPasswordAlt };

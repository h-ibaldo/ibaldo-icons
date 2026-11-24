import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyeCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEyeCorner: ForwardRefExoticComponent<LockEyeCornerProps & RefAttributes<SVGSVGElement>>;

export default LockEyeCorner;
export { LockEyeCorner };

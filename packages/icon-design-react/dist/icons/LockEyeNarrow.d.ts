import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyeNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEyeNarrow: ForwardRefExoticComponent<LockEyeNarrowProps & RefAttributes<SVGSVGElement>>;

export default LockEyeNarrow;
export { LockEyeNarrow };

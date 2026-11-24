import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCheckCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCheckCorner: ForwardRefExoticComponent<LockCheckCornerProps & RefAttributes<SVGSVGElement>>;

export default LockCheckCorner;
export { LockCheckCorner };

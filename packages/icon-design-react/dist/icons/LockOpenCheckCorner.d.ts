import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenCheckCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenCheckCorner: ForwardRefExoticComponent<LockOpenCheckCornerProps & RefAttributes<SVGSVGElement>>;

export default LockOpenCheckCorner;
export { LockOpenCheckCorner };

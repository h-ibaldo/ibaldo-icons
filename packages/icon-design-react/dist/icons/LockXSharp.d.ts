import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockXSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockXSharp: ForwardRefExoticComponent<LockXSharpProps & RefAttributes<SVGSVGElement>>;

export default LockXSharp;
export { LockXSharp };

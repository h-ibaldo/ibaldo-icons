import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockSharp: ForwardRefExoticComponent<LockSharpProps & RefAttributes<SVGSVGElement>>;

export default LockSharp;
export { LockSharp };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockEyeSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockEyeSharp: ForwardRefExoticComponent<LockEyeSharpProps & RefAttributes<SVGSVGElement>>;

export default LockEyeSharp;
export { LockEyeSharp };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockCheckSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockCheckSharp: ForwardRefExoticComponent<LockCheckSharpProps & RefAttributes<SVGSVGElement>>;

export default LockCheckSharp;
export { LockCheckSharp };

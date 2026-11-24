import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenCheckSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenCheckSharp: ForwardRefExoticComponent<LockOpenCheckSharpProps & RefAttributes<SVGSVGElement>>;

export default LockOpenCheckSharp;
export { LockOpenCheckSharp };

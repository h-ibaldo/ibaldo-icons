import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockOpenSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockOpenSharp: ForwardRefExoticComponent<LockOpenSharpProps & RefAttributes<SVGSVGElement>>;

export default LockOpenSharp;
export { LockOpenSharp };

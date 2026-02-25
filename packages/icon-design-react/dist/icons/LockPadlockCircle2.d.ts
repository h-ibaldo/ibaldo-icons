import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockPadlockCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockPadlockCircle2: ForwardRefExoticComponent<LockPadlockCircle2Props & RefAttributes<SVGSVGElement>>;

export default LockPadlockCircle2;
export { LockPadlockCircle2 };

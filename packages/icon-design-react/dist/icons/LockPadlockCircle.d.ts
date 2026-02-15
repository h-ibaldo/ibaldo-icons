import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LockPadlockCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LockPadlockCircle: ForwardRefExoticComponent<LockPadlockCircleProps & RefAttributes<SVGSVGElement>>;

export default LockPadlockCircle;
export { LockPadlockCircle };

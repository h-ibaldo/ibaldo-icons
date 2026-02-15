import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockLock: ForwardRefExoticComponent<ClockLockProps & RefAttributes<SVGSVGElement>>;

export default ClockLock;
export { ClockLock };

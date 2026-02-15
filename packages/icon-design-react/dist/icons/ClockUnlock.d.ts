import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockUnlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockUnlock: ForwardRefExoticComponent<ClockUnlockProps & RefAttributes<SVGSVGElement>>;

export default ClockUnlock;
export { ClockUnlock };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSync: ForwardRefExoticComponent<ClockSyncProps & RefAttributes<SVGSVGElement>>;

export default ClockSync;
export { ClockSync };

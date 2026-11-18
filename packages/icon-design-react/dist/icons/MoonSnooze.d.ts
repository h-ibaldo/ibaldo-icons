import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonSnoozeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonSnooze: ForwardRefExoticComponent<MoonSnoozeProps & RefAttributes<SVGSVGElement>>;

export default MoonSnooze;
export { MoonSnooze };

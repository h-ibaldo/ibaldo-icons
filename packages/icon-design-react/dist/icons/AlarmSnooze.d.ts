import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmSnoozeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmSnooze: ForwardRefExoticComponent<AlarmSnoozeProps & RefAttributes<SVGSVGElement>>;

export default AlarmSnooze;
export { AlarmSnooze };

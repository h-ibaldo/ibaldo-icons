import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmSnoozeArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmSnoozeArc: ForwardRefExoticComponent<AlarmSnoozeArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmSnoozeArc;
export { AlarmSnoozeArc };

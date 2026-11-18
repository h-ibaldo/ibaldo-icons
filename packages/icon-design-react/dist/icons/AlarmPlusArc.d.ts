import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmPlusArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmPlusArc: ForwardRefExoticComponent<AlarmPlusArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmPlusArc;
export { AlarmPlusArc };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmPieArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmPieArc: ForwardRefExoticComponent<AlarmPieArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmPieArc;
export { AlarmPieArc };

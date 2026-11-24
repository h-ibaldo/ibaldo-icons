import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmMinusArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmMinusArc: ForwardRefExoticComponent<AlarmMinusArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmMinusArc;
export { AlarmMinusArc };

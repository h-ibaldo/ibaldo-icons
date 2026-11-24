import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmXArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmXArc: ForwardRefExoticComponent<AlarmXArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmXArc;
export { AlarmXArc };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmCheckArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmCheckArc: ForwardRefExoticComponent<AlarmCheckArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmCheckArc;
export { AlarmCheckArc };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBoltArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBoltArc: ForwardRefExoticComponent<AlarmBoltArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmBoltArc;
export { AlarmBoltArc };

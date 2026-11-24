import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmAlertArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmAlertArc: ForwardRefExoticComponent<AlarmAlertArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmAlertArc;
export { AlarmAlertArc };

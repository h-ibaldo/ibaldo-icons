import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBanArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBanArc: ForwardRefExoticComponent<AlarmBanArcProps & RefAttributes<SVGSVGElement>>;

export default AlarmBanArc;
export { AlarmBanArc };

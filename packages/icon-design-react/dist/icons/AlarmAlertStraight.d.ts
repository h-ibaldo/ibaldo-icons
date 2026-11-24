import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmAlertStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmAlertStraight: ForwardRefExoticComponent<AlarmAlertStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmAlertStraight;
export { AlarmAlertStraight };

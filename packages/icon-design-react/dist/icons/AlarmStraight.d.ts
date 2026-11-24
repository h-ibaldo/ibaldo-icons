import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmStraight: ForwardRefExoticComponent<AlarmStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmStraight;
export { AlarmStraight };

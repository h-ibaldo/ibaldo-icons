import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmCheckStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmCheckStraight: ForwardRefExoticComponent<AlarmCheckStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmCheckStraight;
export { AlarmCheckStraight };

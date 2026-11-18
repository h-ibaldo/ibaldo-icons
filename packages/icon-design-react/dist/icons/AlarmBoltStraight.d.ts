import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBoltStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBoltStraight: ForwardRefExoticComponent<AlarmBoltStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmBoltStraight;
export { AlarmBoltStraight };

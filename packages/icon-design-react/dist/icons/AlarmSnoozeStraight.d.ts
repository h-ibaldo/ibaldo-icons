import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmSnoozeStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmSnoozeStraight: ForwardRefExoticComponent<AlarmSnoozeStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmSnoozeStraight;
export { AlarmSnoozeStraight };

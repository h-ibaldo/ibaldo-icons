import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmBanStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmBanStraight: ForwardRefExoticComponent<AlarmBanStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmBanStraight;
export { AlarmBanStraight };

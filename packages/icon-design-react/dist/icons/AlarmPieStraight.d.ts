import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmPieStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmPieStraight: ForwardRefExoticComponent<AlarmPieStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmPieStraight;
export { AlarmPieStraight };

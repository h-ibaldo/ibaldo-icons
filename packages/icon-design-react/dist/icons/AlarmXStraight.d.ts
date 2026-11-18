import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmXStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmXStraight: ForwardRefExoticComponent<AlarmXStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmXStraight;
export { AlarmXStraight };

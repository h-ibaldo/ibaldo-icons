import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmMinusStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmMinusStraight: ForwardRefExoticComponent<AlarmMinusStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmMinusStraight;
export { AlarmMinusStraight };

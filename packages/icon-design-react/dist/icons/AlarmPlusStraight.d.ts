import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmPlusStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmPlusStraight: ForwardRefExoticComponent<AlarmPlusStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmPlusStraight;
export { AlarmPlusStraight };

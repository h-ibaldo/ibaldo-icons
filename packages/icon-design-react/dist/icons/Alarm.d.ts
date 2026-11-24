import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Alarm: ForwardRefExoticComponent<AlarmProps & RefAttributes<SVGSVGElement>>;

export default Alarm;
export { Alarm };

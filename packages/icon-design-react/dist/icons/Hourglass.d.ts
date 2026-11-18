import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Hourglass: ForwardRefExoticComponent<HourglassProps & RefAttributes<SVGSVGElement>>;

export default Hourglass;
export { Hourglass };

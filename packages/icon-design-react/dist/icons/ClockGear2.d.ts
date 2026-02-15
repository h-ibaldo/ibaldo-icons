import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockGear2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockGear2: ForwardRefExoticComponent<ClockGear2Props & RefAttributes<SVGSVGElement>>;

export default ClockGear2;
export { ClockGear2 };

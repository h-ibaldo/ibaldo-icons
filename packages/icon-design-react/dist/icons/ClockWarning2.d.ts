import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockWarning2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockWarning2: ForwardRefExoticComponent<ClockWarning2Props & RefAttributes<SVGSVGElement>>;

export default ClockWarning2;
export { ClockWarning2 };

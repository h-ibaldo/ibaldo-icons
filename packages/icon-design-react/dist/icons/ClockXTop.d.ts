import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockXTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockXTop: ForwardRefExoticComponent<ClockXTopProps & RefAttributes<SVGSVGElement>>;

export default ClockXTop;
export { ClockXTop };

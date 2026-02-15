import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockCheck: ForwardRefExoticComponent<ClockCheckProps & RefAttributes<SVGSVGElement>>;

export default ClockCheck;
export { ClockCheck };

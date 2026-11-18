import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockFastProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockFast: ForwardRefExoticComponent<ClockFastProps & RefAttributes<SVGSVGElement>>;

export default ClockFast;
export { ClockFast };

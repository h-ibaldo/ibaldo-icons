import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockClose: ForwardRefExoticComponent<ClockCloseProps & RefAttributes<SVGSVGElement>>;

export default ClockClose;
export { ClockClose };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSend2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSend2: ForwardRefExoticComponent<ClockSend2Props & RefAttributes<SVGSVGElement>>;

export default ClockSend2;
export { ClockSend2 };

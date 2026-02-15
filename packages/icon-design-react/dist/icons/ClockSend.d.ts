import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSend: ForwardRefExoticComponent<ClockSendProps & RefAttributes<SVGSVGElement>>;

export default ClockSend;
export { ClockSend };

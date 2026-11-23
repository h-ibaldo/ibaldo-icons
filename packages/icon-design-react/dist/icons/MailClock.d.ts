import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailClock: ForwardRefExoticComponent<MailClockProps & RefAttributes<SVGSVGElement>>;

export default MailClock;
export { MailClock };

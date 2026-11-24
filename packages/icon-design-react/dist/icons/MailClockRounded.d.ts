import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailClockRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailClockRounded: ForwardRefExoticComponent<MailClockRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailClockRounded;
export { MailClockRounded };

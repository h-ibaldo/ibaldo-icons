import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailCheckRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailCheckRounded: ForwardRefExoticComponent<MailCheckRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailCheckRounded;
export { MailCheckRounded };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxMailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailboxMail: ForwardRefExoticComponent<MailboxMailProps & RefAttributes<SVGSVGElement>>;

export default MailboxMail;
export { MailboxMail };

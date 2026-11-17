import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxFlagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailboxFlag: ForwardRefExoticComponent<MailboxFlagProps & RefAttributes<SVGSVGElement>>;

export default MailboxFlag;
export { MailboxFlag };

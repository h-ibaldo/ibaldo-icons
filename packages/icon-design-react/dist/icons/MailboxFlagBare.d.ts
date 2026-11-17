import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxFlagBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailboxFlagBare: ForwardRefExoticComponent<MailboxFlagBareProps & RefAttributes<SVGSVGElement>>;

export default MailboxFlagBare;
export { MailboxFlagBare };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mailbox: ForwardRefExoticComponent<MailboxProps & RefAttributes<SVGSVGElement>>;

export default Mailbox;
export { Mailbox };

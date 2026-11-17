import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxPostFlagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailboxPostFlag: ForwardRefExoticComponent<MailboxPostFlagProps & RefAttributes<SVGSVGElement>>;

export default MailboxPostFlag;
export { MailboxPostFlag };

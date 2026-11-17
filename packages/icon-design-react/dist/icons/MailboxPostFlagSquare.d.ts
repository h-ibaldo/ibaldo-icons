import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxPostFlagSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailboxPostFlagSquare: ForwardRefExoticComponent<MailboxPostFlagSquareProps & RefAttributes<SVGSVGElement>>;

export default MailboxPostFlagSquare;
export { MailboxPostFlagSquare };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxFlagSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailboxFlagSquare: ForwardRefExoticComponent<MailboxFlagSquareProps & RefAttributes<SVGSVGElement>>;

export default MailboxFlagSquare;
export { MailboxFlagSquare };

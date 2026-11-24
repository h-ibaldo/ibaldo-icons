import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailboxFlagWavingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailboxFlagWaving: ForwardRefExoticComponent<MailboxFlagWavingProps & RefAttributes<SVGSVGElement>>;

export default MailboxFlagWaving;
export { MailboxFlagWaving };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailVoicemailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailVoicemail: ForwardRefExoticComponent<MailVoicemailProps & RefAttributes<SVGSVGElement>>;

export default MailVoicemail;
export { MailVoicemail };

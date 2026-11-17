import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailLinkClipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailLinkClip: ForwardRefExoticComponent<MailLinkClipProps & RefAttributes<SVGSVGElement>>;

export default MailLinkClip;
export { MailLinkClip };

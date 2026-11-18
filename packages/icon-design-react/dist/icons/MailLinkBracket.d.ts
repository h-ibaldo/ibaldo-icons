import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailLinkBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailLinkBracket: ForwardRefExoticComponent<MailLinkBracketProps & RefAttributes<SVGSVGElement>>;

export default MailLinkBracket;
export { MailLinkBracket };

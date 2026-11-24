import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailLinkRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailLinkRound: ForwardRefExoticComponent<MailLinkRoundProps & RefAttributes<SVGSVGElement>>;

export default MailLinkRound;
export { MailLinkRound };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailLinkSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailLinkSlanted: ForwardRefExoticComponent<MailLinkSlantedProps & RefAttributes<SVGSVGElement>>;

export default MailLinkSlanted;
export { MailLinkSlanted };

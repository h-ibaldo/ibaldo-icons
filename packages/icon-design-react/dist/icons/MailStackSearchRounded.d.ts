import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailStackSearchRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailStackSearchRounded: ForwardRefExoticComponent<MailStackSearchRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailStackSearchRounded;
export { MailStackSearchRounded };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailEditRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailEditRounded: ForwardRefExoticComponent<MailEditRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailEditRounded;
export { MailEditRounded };

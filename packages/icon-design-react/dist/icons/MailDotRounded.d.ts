import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailDotRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailDotRounded: ForwardRefExoticComponent<MailDotRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailDotRounded;
export { MailDotRounded };

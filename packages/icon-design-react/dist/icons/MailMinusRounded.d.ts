import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailMinusRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailMinusRounded: ForwardRefExoticComponent<MailMinusRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailMinusRounded;
export { MailMinusRounded };

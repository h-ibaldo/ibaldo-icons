import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailXRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailXRounded: ForwardRefExoticComponent<MailXRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailXRounded;
export { MailXRounded };

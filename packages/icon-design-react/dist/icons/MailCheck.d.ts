import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailCheck: ForwardRefExoticComponent<MailCheckProps & RefAttributes<SVGSVGElement>>;

export default MailCheck;
export { MailCheck };

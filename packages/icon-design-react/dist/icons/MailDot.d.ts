import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailDot: ForwardRefExoticComponent<MailDotProps & RefAttributes<SVGSVGElement>>;

export default MailDot;
export { MailDot };

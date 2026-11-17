import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailSearchRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailSearchRounded: ForwardRefExoticComponent<MailSearchRoundedProps & RefAttributes<SVGSVGElement>>;

export default MailSearchRounded;
export { MailSearchRounded };

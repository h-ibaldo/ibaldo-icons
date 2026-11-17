import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Mail: ForwardRefExoticComponent<MailProps & RefAttributes<SVGSVGElement>>;

export default Mail;
export { Mail };

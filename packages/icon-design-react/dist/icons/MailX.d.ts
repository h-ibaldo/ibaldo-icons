import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailX: ForwardRefExoticComponent<MailXProps & RefAttributes<SVGSVGElement>>;

export default MailX;
export { MailX };

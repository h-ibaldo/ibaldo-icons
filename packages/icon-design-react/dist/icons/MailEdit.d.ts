import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailEdit: ForwardRefExoticComponent<MailEditProps & RefAttributes<SVGSVGElement>>;

export default MailEdit;
export { MailEdit };

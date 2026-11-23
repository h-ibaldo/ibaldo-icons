import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailPlus: ForwardRefExoticComponent<MailPlusProps & RefAttributes<SVGSVGElement>>;

export default MailPlus;
export { MailPlus };

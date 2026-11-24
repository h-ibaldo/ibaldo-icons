import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailMinus: ForwardRefExoticComponent<MailMinusProps & RefAttributes<SVGSVGElement>>;

export default MailMinus;
export { MailMinus };

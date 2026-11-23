import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailPlusFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailPlusFolds: ForwardRefExoticComponent<MailPlusFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailPlusFolds;
export { MailPlusFolds };

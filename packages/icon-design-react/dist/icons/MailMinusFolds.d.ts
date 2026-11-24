import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailMinusFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailMinusFolds: ForwardRefExoticComponent<MailMinusFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailMinusFolds;
export { MailMinusFolds };

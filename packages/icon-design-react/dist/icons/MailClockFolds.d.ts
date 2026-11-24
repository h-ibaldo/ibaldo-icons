import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailClockFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailClockFolds: ForwardRefExoticComponent<MailClockFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailClockFolds;
export { MailClockFolds };

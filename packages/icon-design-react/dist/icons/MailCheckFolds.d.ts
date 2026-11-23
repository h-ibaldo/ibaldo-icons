import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailCheckFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailCheckFolds: ForwardRefExoticComponent<MailCheckFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailCheckFolds;
export { MailCheckFolds };

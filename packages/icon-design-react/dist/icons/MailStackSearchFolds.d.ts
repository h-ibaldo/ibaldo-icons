import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailStackSearchFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailStackSearchFolds: ForwardRefExoticComponent<MailStackSearchFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailStackSearchFolds;
export { MailStackSearchFolds };

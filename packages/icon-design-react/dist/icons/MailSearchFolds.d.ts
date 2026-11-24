import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailSearchFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailSearchFolds: ForwardRefExoticComponent<MailSearchFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailSearchFolds;
export { MailSearchFolds };

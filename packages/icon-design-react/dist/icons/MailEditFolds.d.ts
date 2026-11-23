import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailEditFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailEditFolds: ForwardRefExoticComponent<MailEditFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailEditFolds;
export { MailEditFolds };

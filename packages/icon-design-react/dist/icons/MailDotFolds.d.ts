import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailDotFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailDotFolds: ForwardRefExoticComponent<MailDotFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailDotFolds;
export { MailDotFolds };

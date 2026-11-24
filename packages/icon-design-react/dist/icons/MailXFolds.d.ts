import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailXFoldsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailXFolds: ForwardRefExoticComponent<MailXFoldsProps & RefAttributes<SVGSVGElement>>;

export default MailXFolds;
export { MailXFolds };

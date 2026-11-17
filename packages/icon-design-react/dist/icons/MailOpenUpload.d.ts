import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailOpenUploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailOpenUpload: ForwardRefExoticComponent<MailOpenUploadProps & RefAttributes<SVGSVGElement>>;

export default MailOpenUpload;
export { MailOpenUpload };

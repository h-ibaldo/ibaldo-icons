import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayUploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayUpload: ForwardRefExoticComponent<TrayUploadProps & RefAttributes<SVGSVGElement>>;

export default TrayUpload;
export { TrayUpload };

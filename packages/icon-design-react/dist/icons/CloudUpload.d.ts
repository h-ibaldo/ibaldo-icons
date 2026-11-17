import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUpload: ForwardRefExoticComponent<CloudUploadProps & RefAttributes<SVGSVGElement>>;

export default CloudUpload;
export { CloudUpload };

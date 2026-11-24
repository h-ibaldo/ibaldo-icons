import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Upload: ForwardRefExoticComponent<UploadProps & RefAttributes<SVGSVGElement>>;

export default Upload;
export { Upload };

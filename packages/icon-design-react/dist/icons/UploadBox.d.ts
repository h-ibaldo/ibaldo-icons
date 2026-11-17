import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadBoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadBox: ForwardRefExoticComponent<UploadBoxProps & RefAttributes<SVGSVGElement>>;

export default UploadBox;
export { UploadBox };

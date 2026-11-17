import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadBoxNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadBoxNotch: ForwardRefExoticComponent<UploadBoxNotchProps & RefAttributes<SVGSVGElement>>;

export default UploadBoxNotch;
export { UploadBoxNotch };

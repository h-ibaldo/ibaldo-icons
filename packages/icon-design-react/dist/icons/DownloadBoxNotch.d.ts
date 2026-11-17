import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadBoxNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadBoxNotch: ForwardRefExoticComponent<DownloadBoxNotchProps & RefAttributes<SVGSVGElement>>;

export default DownloadBoxNotch;
export { DownloadBoxNotch };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadBoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadBox: ForwardRefExoticComponent<DownloadBoxProps & RefAttributes<SVGSVGElement>>;

export default DownloadBox;
export { DownloadBox };

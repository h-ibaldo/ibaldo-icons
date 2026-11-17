import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudDownload: ForwardRefExoticComponent<CloudDownloadProps & RefAttributes<SVGSVGElement>>;

export default CloudDownload;
export { CloudDownload };

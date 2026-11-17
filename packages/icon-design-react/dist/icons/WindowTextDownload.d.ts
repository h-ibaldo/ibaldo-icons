import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowTextDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowTextDownload: ForwardRefExoticComponent<WindowTextDownloadProps & RefAttributes<SVGSVGElement>>;

export default WindowTextDownload;
export { WindowTextDownload };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListDownload: ForwardRefExoticComponent<WindowListDownloadProps & RefAttributes<SVGSVGElement>>;

export default WindowListDownload;
export { WindowListDownload };

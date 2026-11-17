import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserDownload: ForwardRefExoticComponent<BrowserDownloadProps & RefAttributes<SVGSVGElement>>;

export default BrowserDownload;
export { BrowserDownload };

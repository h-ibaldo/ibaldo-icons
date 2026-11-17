import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenDownload: ForwardRefExoticComponent<ScreenDownloadProps & RefAttributes<SVGSVGElement>>;

export default ScreenDownload;
export { ScreenDownload };

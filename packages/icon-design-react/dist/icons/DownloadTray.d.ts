import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadTrayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadTray: ForwardRefExoticComponent<DownloadTrayProps & RefAttributes<SVGSVGElement>>;

export default DownloadTray;
export { DownloadTray };

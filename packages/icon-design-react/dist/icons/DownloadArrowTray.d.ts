import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrowTrayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrowTray: ForwardRefExoticComponent<DownloadArrowTrayProps & RefAttributes<SVGSVGElement>>;

export default DownloadArrowTray;
export { DownloadArrowTray };

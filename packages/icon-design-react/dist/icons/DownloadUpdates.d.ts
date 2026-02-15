import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadUpdatesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadUpdates: ForwardRefExoticComponent<DownloadUpdatesProps & RefAttributes<SVGSVGElement>>;

export default DownloadUpdates;
export { DownloadUpdates };

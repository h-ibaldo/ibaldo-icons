import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudDownloadLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudDownloadLarge: ForwardRefExoticComponent<CloudDownloadLargeProps & RefAttributes<SVGSVGElement>>;

export default CloudDownloadLarge;
export { CloudDownloadLarge };

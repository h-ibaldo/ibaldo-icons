import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudDownloadTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudDownloadTall: ForwardRefExoticComponent<CloudDownloadTallProps & RefAttributes<SVGSVGElement>>;

export default CloudDownloadTall;
export { CloudDownloadTall };

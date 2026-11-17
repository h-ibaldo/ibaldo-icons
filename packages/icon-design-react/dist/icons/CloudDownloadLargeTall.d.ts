import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudDownloadLargeTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudDownloadLargeTall: ForwardRefExoticComponent<CloudDownloadLargeTallProps & RefAttributes<SVGSVGElement>>;

export default CloudDownloadLargeTall;
export { CloudDownloadLargeTall };

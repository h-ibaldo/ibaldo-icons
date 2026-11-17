import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadFlat: ForwardRefExoticComponent<DownloadFlatProps & RefAttributes<SVGSVGElement>>;

export default DownloadFlat;
export { DownloadFlat };

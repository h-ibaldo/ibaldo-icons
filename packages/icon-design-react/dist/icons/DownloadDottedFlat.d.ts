import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadDottedFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadDottedFlat: ForwardRefExoticComponent<DownloadDottedFlatProps & RefAttributes<SVGSVGElement>>;

export default DownloadDottedFlat;
export { DownloadDottedFlat };

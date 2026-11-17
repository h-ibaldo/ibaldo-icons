import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadDotted: ForwardRefExoticComponent<DownloadDottedProps & RefAttributes<SVGSVGElement>>;

export default DownloadDotted;
export { DownloadDotted };

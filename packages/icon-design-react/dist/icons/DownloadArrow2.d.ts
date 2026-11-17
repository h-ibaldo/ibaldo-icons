import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrow2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrow2: ForwardRefExoticComponent<DownloadArrow2Props & RefAttributes<SVGSVGElement>>;

export default DownloadArrow2;
export { DownloadArrow2 };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrow1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrow1: ForwardRefExoticComponent<DownloadArrow1Props & RefAttributes<SVGSVGElement>>;

export default DownloadArrow1;
export { DownloadArrow1 };

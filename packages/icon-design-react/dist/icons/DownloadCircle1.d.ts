import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadCircle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadCircle1: ForwardRefExoticComponent<DownloadCircle1Props & RefAttributes<SVGSVGElement>>;

export default DownloadCircle1;
export { DownloadCircle1 };

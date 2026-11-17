import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadBox1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadBox1: ForwardRefExoticComponent<DownloadBox1Props & RefAttributes<SVGSVGElement>>;

export default DownloadBox1;
export { DownloadBox1 };

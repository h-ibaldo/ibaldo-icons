import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadBox2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadBox2: ForwardRefExoticComponent<DownloadBox2Props & RefAttributes<SVGSVGElement>>;

export default DownloadBox2;
export { DownloadBox2 };

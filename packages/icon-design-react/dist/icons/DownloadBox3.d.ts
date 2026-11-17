import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadBox3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadBox3: ForwardRefExoticComponent<DownloadBox3Props & RefAttributes<SVGSVGElement>>;

export default DownloadBox3;
export { DownloadBox3 };

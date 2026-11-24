import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Download: ForwardRefExoticComponent<DownloadProps & RefAttributes<SVGSVGElement>>;

export default Download;
export { Download };

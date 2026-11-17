import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquareOpen: ForwardRefExoticComponent<DownloadSquareOpenProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquareOpen;
export { DownloadSquareOpen };

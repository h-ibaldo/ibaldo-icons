import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquare: ForwardRefExoticComponent<DownloadSquareProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquare;
export { DownloadSquare };

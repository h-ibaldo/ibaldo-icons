import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadTraySquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadTraySquare: ForwardRefExoticComponent<DownloadTraySquareProps & RefAttributes<SVGSVGElement>>;

export default DownloadTraySquare;
export { DownloadTraySquare };

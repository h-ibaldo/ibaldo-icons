import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareStackCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquareStackCorner: ForwardRefExoticComponent<DownloadSquareStackCornerProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquareStackCorner;
export { DownloadSquareStackCorner };

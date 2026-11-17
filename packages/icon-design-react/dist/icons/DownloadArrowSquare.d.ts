import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrowSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrowSquare: ForwardRefExoticComponent<DownloadArrowSquareProps & RefAttributes<SVGSVGElement>>;

export default DownloadArrowSquare;
export { DownloadArrowSquare };

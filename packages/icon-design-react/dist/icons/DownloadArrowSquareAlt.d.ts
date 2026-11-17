import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrowSquareAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrowSquareAlt: ForwardRefExoticComponent<DownloadArrowSquareAltProps & RefAttributes<SVGSVGElement>>;

export default DownloadArrowSquareAlt;
export { DownloadArrowSquareAlt };

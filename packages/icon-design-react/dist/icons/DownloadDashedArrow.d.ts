import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadDashedArrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadDashedArrow: ForwardRefExoticComponent<DownloadDashedArrowProps & RefAttributes<SVGSVGElement>>;

export default DownloadDashedArrow;
export { DownloadDashedArrow };

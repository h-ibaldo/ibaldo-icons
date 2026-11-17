import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadDashedArrowAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadDashedArrowAlt: ForwardRefExoticComponent<DownloadDashedArrowAltProps & RefAttributes<SVGSVGElement>>;

export default DownloadDashedArrowAlt;
export { DownloadDashedArrowAlt };

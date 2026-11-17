import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadCircleFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadCircleFlat: ForwardRefExoticComponent<DownloadCircleFlatProps & RefAttributes<SVGSVGElement>>;

export default DownloadCircleFlat;
export { DownloadCircleFlat };

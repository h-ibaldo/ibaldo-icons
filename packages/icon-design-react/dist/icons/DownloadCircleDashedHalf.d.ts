import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadCircleDashedHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadCircleDashedHalf: ForwardRefExoticComponent<DownloadCircleDashedHalfProps & RefAttributes<SVGSVGElement>>;

export default DownloadCircleDashedHalf;
export { DownloadCircleDashedHalf };

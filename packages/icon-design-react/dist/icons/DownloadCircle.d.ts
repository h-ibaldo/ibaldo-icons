import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadCircle: ForwardRefExoticComponent<DownloadCircleProps & RefAttributes<SVGSVGElement>>;

export default DownloadCircle;
export { DownloadCircle };

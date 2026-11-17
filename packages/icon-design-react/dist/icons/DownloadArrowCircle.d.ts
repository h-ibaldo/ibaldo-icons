import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrowCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrowCircle: ForwardRefExoticComponent<DownloadArrowCircleProps & RefAttributes<SVGSVGElement>>;

export default DownloadArrowCircle;
export { DownloadArrowCircle };

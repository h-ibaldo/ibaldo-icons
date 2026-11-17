import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadCircleDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadCircleDashed: ForwardRefExoticComponent<DownloadCircleDashedProps & RefAttributes<SVGSVGElement>>;

export default DownloadCircleDashed;
export { DownloadCircleDashed };

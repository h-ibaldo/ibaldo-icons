import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadCircle2: ForwardRefExoticComponent<DownloadCircle2Props & RefAttributes<SVGSVGElement>>;

export default DownloadCircle2;
export { DownloadCircle2 };

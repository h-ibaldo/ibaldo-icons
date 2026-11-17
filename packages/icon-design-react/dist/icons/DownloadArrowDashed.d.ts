import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrowDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrowDashed: ForwardRefExoticComponent<DownloadArrowDashedProps & RefAttributes<SVGSVGElement>>;

export default DownloadArrowDashed;
export { DownloadArrowDashed };

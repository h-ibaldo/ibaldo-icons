import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrowDownDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrowDownDashed: ForwardRefExoticComponent<DownloadArrowDownDashedProps & RefAttributes<SVGSVGElement>>;

export default DownloadArrowDownDashed;
export { DownloadArrowDownDashed };

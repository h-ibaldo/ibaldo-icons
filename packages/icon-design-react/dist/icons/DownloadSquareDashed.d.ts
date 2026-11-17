import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquareDashed: ForwardRefExoticComponent<DownloadSquareDashedProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquareDashed;
export { DownloadSquareDashed };

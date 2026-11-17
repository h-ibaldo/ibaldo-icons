import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareStackOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquareStackOpen: ForwardRefExoticComponent<DownloadSquareStackOpenProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquareStackOpen;
export { DownloadSquareStackOpen };

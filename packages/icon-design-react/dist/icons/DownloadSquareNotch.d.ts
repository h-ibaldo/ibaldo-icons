import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquareNotch: ForwardRefExoticComponent<DownloadSquareNotchProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquareNotch;
export { DownloadSquareNotch };

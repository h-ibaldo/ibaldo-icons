import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareOpenPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquareOpenPlain: ForwardRefExoticComponent<DownloadSquareOpenPlainProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquareOpenPlain;
export { DownloadSquareOpenPlain };

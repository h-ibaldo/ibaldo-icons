import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadSquareStack: ForwardRefExoticComponent<DownloadSquareStackProps & RefAttributes<SVGSVGElement>>;

export default DownloadSquareStack;
export { DownloadSquareStack };

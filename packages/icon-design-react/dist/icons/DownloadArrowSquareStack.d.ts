import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DownloadArrowSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DownloadArrowSquareStack: ForwardRefExoticComponent<DownloadArrowSquareStackProps & RefAttributes<SVGSVGElement>>;

export default DownloadArrowSquareStack;
export { DownloadArrowSquareStack };
